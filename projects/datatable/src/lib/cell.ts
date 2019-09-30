import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[xotbDatatableCell]' })
export class XotbDatatableCell {
  constructor(public templateRef: TemplateRef<any>) {}
}
