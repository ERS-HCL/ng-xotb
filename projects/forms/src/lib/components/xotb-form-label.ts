import {
  OnInit,
  Input,
  TemplateRef,
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { InputBoolean } from 'ng-xotb/utility';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'label[xotbFormLabel]',
  templateUrl: './xotb-form-label.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbFormLabel implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('xotbFormLabel') label: string | TemplateRef<any>;

  // tslint:disable-next-line: no-input-rename
  @Input('xotbFormLabelClass') styleClass = 'xotb-form-element__label';

  @Input() @InputBoolean() required: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, this.styleClass);
  }
}
