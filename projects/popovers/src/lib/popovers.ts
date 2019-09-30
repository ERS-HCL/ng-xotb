import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef,
  OnDestroy,
  HostBinding,
  EventEmitter,
  Renderer2,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { HostService } from 'ng-xotb/common';
import {
  OnChange,
  Placement,
  POSITION_MAP,
  getPlacementStyles,
  ngClassCombine
} from 'ng-xotb/utility';
import { uniqueId } from 'ng-xotb/utility';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Variant, Size } from './trigger';
import { isTemplateRef } from 'ng-xotb/utility';

@Component({
  selector: 'section[xotb-popover]',
  templateUrl: './popover.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
  host: {
    role: 'dialog',
    '[class.xotb-popover]': 'true'
  },
  styles: []
})
export class XotbPopovers implements OnInit, OnDestroy {
  template: string | TemplateRef<void>;

  header: string | TemplateRef<void>;

  footer: string | TemplateRef<void>;

  closeTitle: string;

  closeVisible: boolean;

  @OnChange() popoverClass: any;

  @OnChange() size: Size;

  @OnChange() variant: Variant;

  @OnChange() placement: Placement;

  @HostBinding('attr.aria-labelledby')
  get labelledby() {
    return this.header ? `${this.uid}-heading` : null;
  }

  @HostBinding('attr.aria-describedby')
  get describedby() {
    return this.template ? this.uid : null;
  }

  close = new EventEmitter();

  isTemplateRef = isTemplateRef;
  canClose: boolean;
  uid = uniqueId('popover');
  inverseCloseButton: boolean;

  private nubbin: Placement;

  /** The class that traps and manages focus within the dialog. */
  private focusTrap: FocusTrap;

  constructor(
    private hostService: HostService,
    public element: ElementRef,
    public renderer: Renderer2,
    private focusTrapFactory: FocusTrapFactory,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
    this.focusTrap.focusInitialElementWhenReady();
  }

  ngOnDestroy() {
    if (this.focusTrap) {
      this.focusTrap.destroy();
      this.focusTrap = null;
    }
  }

  xotbOnPropertyChange(prop) {
    if (prop === 'size' || prop === 'popoverClass') {
      this.setHostClass();
    } else if (prop === 'placement') {
      this.nubbin = POSITION_MAP[this.placement].nubbin;
      this.setHostClass();
    } else if (prop === 'variant') {
      this.inverseCloseButton =
        ['walkthrough', 'feature', 'error'].indexOf(this.variant) > -1;
      this.setHostClass();
    }
  }

  markForCheck() {
    this.cd.markForCheck();
  }

  onClose() {
    this.close.emit();
  }

  private setHostClass() {
    this.hostService.updateClass(
      this.element,
      ngClassCombine(this.popoverClass, {
        [`xotb-nubbin_${this.nubbin}`]: true,
        [`xotb-popover_${this.size}`]: !!this.size,
        [`xotb-popover_walkthrough`]: this.variant === 'feature',
        [`xotb-popover_${this.variant}`]: !!this.variant
      })
    );

    this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
  }
}
