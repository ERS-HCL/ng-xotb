import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef,
  HostBinding,
  AfterContentInit,
  ChangeDetectorRef,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { XotbCheckboxInput } from '../input/input';
import { toBoolean, isRequired, InputBoolean } from 'ng-xotb/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'xotb-checkbox,[xotb-checkbox]',
  templateUrl: './checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-form-element]': 'true'
  }
})
export class XotbCheckbox implements OnChanges, AfterContentInit, OnDestroy {
  @ContentChild(XotbCheckboxInput, { static: true }) input: XotbCheckboxInput;

  @isRequired
  @Input()
  label: string | TemplateRef<any>;

  @Input() error: string | TemplateRef<any>;

  @Input() @InputBoolean() stacked: boolean;

  @HostBinding('class.xotb-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  required: boolean;

  _uid: string;

  get errorId() {
    return `error_${this._uid}`;
  }

  private requiredSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    this.input.describedBy = this.error ? this.errorId : null;
  }

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(
        `[ng-xotb] Couldn't find an <input type="checkbox"> with [xotb] attribute inside XotbCheckbox`
      );
    }

    this.requiredSubscription = this.input.requiredSubject.subscribe(
      required => {
        this.required = required;
        this.cd.detectChanges();
      }
    );

    this._uid = this.input.id;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.requiredSubscription) {
      this.requiredSubscription.unsubscribe();
      this.requiredSubscription = null;
    }
  }
}
