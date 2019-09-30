import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean, uniqueId } from 'ng-xotb/utility';

@Directive({
  selector: 'input[xotb][type=checkbox]'
})
export class XotbCheckboxInput {
  requiredSubject = new BehaviorSubject<boolean>(false);

  set describedBy(value: string) {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'aria-describedby',
      value
    );
  }

  @Input() set required(required: any) {
    this.requiredSubject.next(toBoolean(required));
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (!this.el.nativeElement.id) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'id',
        uniqueId('checkbox')
      );
    }
  }

  get id() {
    return this.el.nativeElement.id;
  }

  addClass(klass: string) {
    this.renderer.addClass(this.el.nativeElement, klass);
  }
}
