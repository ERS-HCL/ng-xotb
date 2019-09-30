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
import { toBoolean, isRequired } from 'ng-xotb/utility';
import { Subscription } from 'rxjs';
import { XotbSelectInput } from './select-input';

@Component({
  selector: 'xotb-select,[xotb-select]',
  templateUrl: './select.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-form-element]': 'true'
  }
})
export class XotbSelect implements OnChanges, AfterContentInit, OnDestroy {
  @ContentChild(XotbSelectInput, { static: true }) input: XotbSelectInput;

  @isRequired
  @Input()
  label: string | TemplateRef<any>;

  @Input() fieldLevelHelpTooltip: string | TemplateRef<any>;

  @Input() error: string | TemplateRef<any>;

  @HostBinding('class.xotb-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  required: boolean;

  _uid: string;

  get errorId() {
    return `error_${this._uid}`;
  }

  private ɵRequiredSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    this.input.describedBy = this.error ? this.errorId : null;
  }

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(
        `[ng-xotb] Couldn't find an <select> with [xotb] attribute inside xotb-select`
      );
    }

    this.ɵRequiredSubscription = this.input.requiredSubject.subscribe(
      required => {
        this.required = required;
        this.cd.detectChanges();
      }
    );

    this._uid = this.input.id;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.ɵRequiredSubscription) {
      this.ɵRequiredSubscription.unsubscribe();
      this.ɵRequiredSubscription = null;
    }
  }
}
