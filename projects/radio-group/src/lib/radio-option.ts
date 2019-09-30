import { ContentChild } from '@angular/core';
import {
  Component,
  TemplateRef,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
  OnInit,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { XotbRadioGroup } from './radio-group';
import { XotbRadioInput } from './input/input';

@Component({
  selector: 'xotb-radio-option',
  templateUrl: './radio-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbRadioOption implements OnInit, AfterContentInit, OnDestroy {
  @Input() label: string | TemplateRef<any>;

  @ContentChild(XotbRadioInput, { static: true }) input: XotbRadioInput;

  constructor(
    private radioGroup: XotbRadioGroup,
    private cd: ChangeDetectorRef
  ) {}

  type: 'list' | 'button';

  @HostBinding('class.xotb-radio')
  get isTypeList() {
    return this.type === 'list';
  }

  @HostBinding('class.xotb-button')
  @HostBinding('class.xotb-radio_button')
  get isTypeButton() {
    return this.type === 'button';
  }

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.radioGroup.type$.subscribe((type: 'list' | 'button') => {
        this.type = type;
        this.cd.detectChanges();
      }),
      this.radioGroup.error$.subscribe((errorId: string | null) => {
        this.input.describedBy = errorId;
      })
    );
  }

  ngAfterContentInit() {
    this.input.name = this.radioGroup.uid;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }
}
