import {
  Directive,
  HostBinding,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean, uniqueId } from 'ng-xotb/utility';

@Directive({
  selector: 'select[xotb]',
  host: {
    '[class.xotb-select]': 'true'
  }
})
export class XotbSelectInput {
  requiredSubject = new BehaviorSubject<boolean>(false);

  @HostBinding('attr.aria-describedby') describedBy: string;

  @Input() set required(required: any) {
    this.requiredSubject.next(toBoolean(required));
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (!this.el.nativeElement.id) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'id',
        uniqueId('select')
      );
    }
  }

  get id() {
    return this.el.nativeElement.id;
  }
}
