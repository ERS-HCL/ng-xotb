import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { uniqueId } from 'ng-xotb/utility';

@Directive({
  selector: 'input[xotb][type=radio]'
})
export class XotbRadioInput {
  @HostBinding('attr.name') name: string;

  @HostBinding('attr.aria-describedby') describedBy: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (!this.el.nativeElement.id) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'id',
        uniqueId('radio')
      );
    }
  }

  get id() {
    return this.el.nativeElement.id;
  }
}
