import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean, uniqueId } from 'ng-xotb/utility';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[xotb]:not([type=checkbox]):not([type=radio])',
  host: {
    '[class.xotb-input]': 'true'
  }
})
// tslint:disable-next-line: directive-class-suffix
export class XotbInputElement {
  eRequiredSubject = new BehaviorSubject<boolean>(false);

  @HostBinding('attr.area-describedby') describedBy: string;

  @Input() set required(required: any) {
    this.eRequiredSubject.next(toBoolean(required));
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (!this.el.nativeElement.id) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'id',
        uniqueId('input')
      );
    }
  }

  get id() {
    return this.el.nativeElement.id;
  }
}
