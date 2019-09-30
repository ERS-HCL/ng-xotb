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
import { XotbTextareaInput } from '../input/input';
import { toBoolean } from 'ng-xotb/utility';
import { isRequired } from 'ng-xotb/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'xotb-textarea,[xotb-textarea]',
  templateUrl: './textarea.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-form-element]': 'true'
  }
})
export class XotbTextarea implements OnChanges, AfterContentInit, OnDestroy {
  @ContentChild(XotbTextareaInput, { static: true }) input: XotbTextareaInput;

  @isRequired
  @Input()
  label: string | TemplateRef<any>;

  @Input() fieldLevelHelpTooltip: string | TemplateRef<any>;

  @Input() error: string;

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
        `[xotb-components] Couldn't find an <textarea> with [xotb] attribute inside xotb-textarea`
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
