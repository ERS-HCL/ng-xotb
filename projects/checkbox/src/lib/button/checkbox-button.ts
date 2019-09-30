import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ContentChild,
  ChangeDetectorRef,
  AfterContentInit,
  TemplateRef
} from '@angular/core';
import { XotbCheckboxInput } from '../input/input';

@Component({
  selector: 'xotb-checkbox-button',
  templateUrl: './checkbox-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-checkbox_add-button]': 'true'
  }
})
export class XotbCheckboxButton implements AfterContentInit {
  @ContentChild(XotbCheckboxInput, { static: true }) input: XotbCheckboxInput;

  @Input() label: string | TemplateRef<any>;

  _uid: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(
        `[ng-xotb] Couldn't find an <input type="checkbox"> with [xotb] attribute inside ${this}`
      );
    }

    this._uid = this.input.id;
    this.cd.detectChanges();

    this.input.addClass('xotb-assistive-text');
  }
}
