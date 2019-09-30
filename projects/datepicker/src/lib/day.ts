import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
import { XotbInternalDate } from './util';

@Directive({
  selector: 'td[xotbDay]'
})
export class XotbDay {
  @Input('xotbDay') readonly date: XotbInternalDate;

  @HostBinding('class.xotb-disabled-text')
  @HostBinding('attr.aria-disabled')
  @Input()
  readonly xotbDayDisabled: boolean;

  @HostBinding('class.xotb-is-selected')
  @HostBinding('attr.aria-selected')
  @Input()
  readonly xotbDaySelected: boolean;

  @Input() readonly isActive;

  @HostBinding('attr.tabindex')
  get tabindex() {
    return this.isActive ? 0 : -1;
  }

  constructor(private el: ElementRef) {}

  focus() {
    this.el.nativeElement.focus();
  }
}
