import {
  Directive,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  Optional
} from '@angular/core';
import { uniqueId } from 'ng-xotb/utility';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[xotb-tab]',
  exportAs: 'xotbTab'
})
export class XotbTab {
  @Input() id: string;
  @Input() label: string | TemplateRef<any>;
  @Output() activate = new EventEmitter<XotbTab>();
  @Output() deactivate = new EventEmitter<XotbTab>();

  uid = uniqueId('tab');

  private _active = false;

  constructor(@Optional() public templateRef: TemplateRef<any>) {}

  set active(active: boolean) {
    if (active === this._active) {
      return;
    }
    this._active = active;
    if (active) {
      this.activate.emit(this);
    } else {
      this.deactivate.emit(this);
    }
  }

  get active(): boolean {
    return this._active;
  }
}
