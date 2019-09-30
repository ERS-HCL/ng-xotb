import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[xotbDropdownItem]',
  host: {
    tabindex: '0'
  }
})
export class XotbDropdownItem {
  private isFocused = false;

  @HostListener('focus') onFocus() {
    this.isFocused = true;
  }
  @HostListener('blur') onBlur() {
    this.isFocused = false;
  }

  constructor(private element: ElementRef) {}

  hasFocus() {
    return this.isFocused;
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
