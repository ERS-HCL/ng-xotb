import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  HostListener,
  HostBinding
} from '@angular/core';
import { HostService } from 'ng-xotb/common';
import { InputBoolean, isRequired } from 'ng-xotb/utility';

const DEFAULT_VARIANT = 'border';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[xotbIconButtonStateful]',
  templateUrl: './icon-button-stateful.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService]
})
export class XotbIconButtonStateful implements OnInit, OnChanges {
  /**
   * Specifies whether button is in selected state or not.
   */
  @isRequired
  @HostBinding('class.xotb-is-selected')
  @HostBinding('attr.aria-pressed')
  @Input()
  @InputBoolean()
  selected = false;

  @Output() selectedChange = new EventEmitter<boolean>();

  @Input() iconName: string;

  /**
   * Fallback value for `alternativeText`.
   */
  @Input() title: string;

  @Input() alternativeText;

  /**
   * The variant changes the appearance of the button.
   */
  @Input() variant:
    | 'border'
    | 'border-filled'
    | 'border-inverse' = DEFAULT_VARIANT;

  /**
   *  The size of the button.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | null = null;

  get altText() {
    return this.alternativeText || this.title;
  }

  constructor(
    private el: ElementRef,
    private hostService: HostService,
    renderer: Renderer2
  ) {
    renderer.addClass(this.el.nativeElement, 'xotb-button');
    renderer.addClass(this.el.nativeElement, 'xotb-button_icon');
  }

  @HostListener('click')
  onclick() {
    this.selectedChange.emit(!this.selected);
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  private setHostClass() {
    this.hostService.updateClass(this.el, {
      [`xotb-button_icon-${this.variant || DEFAULT_VARIANT}`]: true,
      [`xotb-button_icon-${this.size}`]: !!this.size
    });
  }
}
