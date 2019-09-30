import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[xotbDatatableHeading]' })
export class XotbDatatableHeadingTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
