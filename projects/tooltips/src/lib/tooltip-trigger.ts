import {
  Directive,
  Input,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  Renderer2,
  HostListener,
  Optional,
  Inject
} from '@angular/core';
import {
  OverlayRef,
  Overlay,
  FlexibleConnectedPositionStrategy
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { XotbTooltip } from './tooltip';
import {
  POSITION_MAP,
  DEFAULT_TOOLTIP_POSITIONS,
  getPlacementName,
  Placement,
  uniqueId,
  InputBoolean
} from 'ng-xotb/utility';
import { XOTB_TOOLTIP_CONFIG, XotbTooltipConfig } from './config';

@Directive({
  selector: '[xotbTooltip]',
  exportAs: 'xotbTooltip'
})
export class XotbTooltipTrigger implements OnChanges, OnDestroy {
  /**
   * The content as string or the connected template reference to show.
   */
  @Input('xotbTooltip') template: string | TemplateRef<void>;

  /**
   * Position relative to host element.
   */
  @Input('xotbTooltipPlacement')
  set placement(placement: Placement) {
    if (placement === this.placement) {
      return;
    }

    this._placement = placement;

    if (this.overlayRef) {
      this.updatePosition();
    }
  }
  get placement() {
    return this._placement || this.config.placement;
  }

  /**
   * Delay in milliseconds until it opens/closes.
   */
  @Input('xotbTooltipDelay')
  set delay(_delay: any | any[]) {
    const delay = Array.isArray(_delay) ? _delay : [_delay, _delay];
    [this.openDelay, this.closeDelay] = delay.map(Number);
  }

  /**
   * Whether the floating tooltip is visible.
   */
  @Input('xotbTooltipOpen') set xotbOpen(open: boolean) {
    if (open === this.xotbOpen) {
      return;
    }

    open ? this.create() : this.detach();
    this._open = open;
  }
  get xotbOpen() {
    return this._open;
  }

  /**
   * Open/close without two-way binding input.
   */
  @Input('xotbTooltipOpenAuto') @InputBoolean() openAuto: boolean;

  /**
   * Gives the possibility to interact with the content of the popover.
   */
  @Input('xotbTooltipInteractive') @InputBoolean() interactive: boolean;

  /**
   * Extra class(es) you want to apply to tooltip host element.
   */
  @Input('xotbTooltipClass') tooltipClass: any;

  /**
   * Emit an event when actual tooltip is shown or hidden.
   */
  @Output() xotbTooltipOpenChange = new EventEmitter<boolean>();

  uid = uniqueId('tooltip');

  /** Names of properties that should be proxy to child component. */
  private needProxyProperties = new Set([
    'template',
    'placement',
    'uid',
    'tooltipClass'
  ]);
  private _placement: Placement;
  private _open: boolean;
  private portal: ComponentPortal<XotbTooltip>;
  private overlayRef: OverlayRef | null;
  private tooltip: XotbTooltip | null;
  private openDelay = 0;
  private closeDelay = 0;
  private toggleTimeout: any = null;
  private positionChangesSubscription: Subscription;
  private overlayListeners = new Set<() => void>();
  private overlayElement;

  private config: XotbTooltipConfig;

  constructor(
    @Optional() @Inject(XOTB_TOOLTIP_CONFIG) defaultConfig: XotbTooltipConfig,
    private element: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {
    this.config = { ...new XotbTooltipConfig(), ...defaultConfig };
    this.openAuto = this.config.openAuto;
    this.interactive = this.config.interactive;
    this.delay = this.config.delay;

    this.renderer.setAttribute(
      this.element.nativeElement,
      'aria-describedby',
      this.uid
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.xotbOpen) {
      this.updateProxies(changes);

      Promise.resolve().then(() => {
        if (this.overlayRef) {
          this.overlayRef.updatePosition();
        }
      });
    }
  }

  @HostListener('mouseenter')
  @HostListener('focus')
  onMouseOver() {
    this.open();
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  onMouseOut() {
    this.close();
    if (this.overlayRef && !this.overlayElement && this.interactive) {
      this.overlayElement = this.overlayRef.overlayElement;
      this.overlayListeners.add(
        this.renderer.listen(this.overlayElement, 'mouseenter', () =>
          this.open()
        )
      );
      this.overlayListeners.add(
        this.renderer.listen(this.overlayElement, 'mouseleave', () =>
          this.close()
        )
      );
    }
  }

  ngOnDestroy(): void {
    this.detach();
    this.close(0);
  }

  // Expose open method
  open(delay = this.openDelay): void {
    this.handle(true, delay);
  }

  // Expose close method
  close(delay = this.closeDelay): void {
    this.handle(false, delay);
  }

  // Expose toggle method
  toggle(): void {
    this.xotbOpen ? this.close(0) : this.open(0);
  }

  private handle(open: boolean, delay: number): void {
    if (this.toggleTimeout !== null) {
      clearTimeout(this.toggleTimeout);
      this.toggleTimeout = null;
    }

    if (open !== this.xotbOpen) {
      if (delay > 0) {
        this.toggleTimeout = setTimeout(() => {
          this.toggleTimeout = null;
          this.emitOpen(open);
        }, delay);
      } else {
        this.emitOpen(open);
      }
    }
  }

  private emitOpen(open) {
    if (this.openAuto) {
      this.xotbOpen = open;
    }
    this.xotbTooltipOpenChange.emit(open);
  }

  private create(): void {
    if (this.xotbOpen) {
      return;
    }

    this.detach();

    const overlayRef = this.createOverlay();

    this.portal =
      this.portal || new ComponentPortal(XotbTooltip, this.viewContainerRef);
    this.tooltip = overlayRef.attach(this.portal).instance;

    this.needProxyProperties.forEach(property =>
      this.updateTooltip(property, this[property])
    );
  }

  /** Detaches the currently-attached tooltip. */
  private detach(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

    // Clean up the event listeners
    this.overlayListeners.forEach(unlisten => unlisten());
    this.overlayListeners.clear();

    if (this.positionChangesSubscription) {
      this.positionChangesSubscription.unsubscribe();
      this.positionChangesSubscription = null;
    }

    this.tooltip = null;
  }

  /** Create the overlay config and position strategy */
  private createOverlay(): OverlayRef {
    if (this.overlayRef) {
      return this.overlayRef;
    }

    // Create connected position strategy that listens for scroll events to reposition.
    const strategy = this.overlay
      .position()
      .flexibleConnectedTo(this.element)
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withPush(false);

    this.positionChangesSubscription = strategy.positionChanges
      .pipe(
        map(change => getPlacementName(change, this.placement)),
        distinctUntilChanged()
      )
      .subscribe((placement: Placement) => {
        this.updatePosition();
        this.updateTooltip('placement', placement);
      });

    this.overlayRef = this.overlay.create({
      positionStrategy: strategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });

    this.updatePosition();

    return this.overlayRef;
  }

  /** Updates the position of the current tooltip. */
  private updatePosition(): void {
    const position = <FlexibleConnectedPositionStrategy>(
      this.overlayRef.getConfig().positionStrategy
    );

    position.withPositions([
      POSITION_MAP[this.placement].position,
      ...DEFAULT_TOOLTIP_POSITIONS
    ]);
  }

  private updateTooltip(key: string, value: any): void {
    this.tooltip[key] = value;
  }

  /**
   * Set inputs of child components when this component's inputs change.
   */
  private updateProxies(changes: SimpleChanges): void {
    Object.keys(changes)
      .filter(key => this.needProxyProperties.has(key))
      .forEach(key => this.updateTooltip(key, this[key]));
  }
}
