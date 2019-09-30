import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
  OnChanges
} from '@angular/core';
import { InputBoolean } from 'ng-xotb/utility';
import { HostService } from 'ng-xotb/common';

@Directive({
  selector: '[xotbButtonStateful]',
  providers: [HostService]
})
export class XotbButtonStateful implements OnInit, OnChanges {
  /**
   * Shows whether the button has been selected or not.
   */
  @Input() @InputBoolean() state: boolean;

  /**
   * Triggered when the button is clicked.
   */
  @Output() stateChange = new EventEmitter<boolean>();

  /**
   * Appearance.
   */
  @Input() variant:
    | 'brand'
    | 'destructive'
    | 'inverse'
    | 'neutral'
    | 'success'
    | 'text' = 'neutral';

  private focused: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private hostService: HostService
  ) {
    this.renderer.addClass(this.el.nativeElement, 'xotb-button');
    this.renderer.addClass(this.el.nativeElement, 'xotb-button_stateful');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-live', 'assertive');
  }

  @HostListener('click')
  onSelectChange() {
    this.stateChange.emit(!this.state);
  }

  @HostListener('focus', ['1'])
  @HostListener('blur', ['0'])
  onFocusToggle(focused: string) {
    this.focused = !!+focused;

    if (!this.focused) {
      this.setHostClass();
    }
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  private setHostClass() {
    this.hostService.updateClass(this.el, {
      [`xotb-button_${
        this.variant === 'text' ? 'reset' : this.variant
      }`]: !!this.variant,
      [`xotb-is-selected-clicked`]: this.state && this.focused,
      [`xotb-is-selected`]: this.state && !this.focused,
      [`xotb-not-selected`]: !this.state
    });
  }
}
