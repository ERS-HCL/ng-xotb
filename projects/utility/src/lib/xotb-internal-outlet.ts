import {
  Component,
  Input,
  TemplateRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: '[xotbInternalOutlet]',
  template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template
        [ngTemplateOutlet]="xotbInternalOutlet"
        [ngTemplateOutletContext]="xotbInternalOutletContext"
      ></ng-template>
    </ng-template>
    <ng-template #str>{{ xotbInternalOutlet }}</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbInternalOutlet {
  @Input() xotbInternalOutlet: string | TemplateRef<any>;

  @Input() xotbInternalOutletContext: any;

  isTemplate() {
    return this.xotbInternalOutlet instanceof TemplateRef;
  }
}
