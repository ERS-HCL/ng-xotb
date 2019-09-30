import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'xotb-form-help',
  templateUrl: './xotb-help.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb__form-element__icon]': 'true'
  }
})
export class XotbFormHelp {
  isOpen = false;

  @Input() content: string | TemplateRef<any>;
}
