import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[xotbLoadingOverlay]' })
export class XotbDatatableLoadingOverlay {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[xotbNoRowsOverlay]' })
export class XotbDatatableNoRowsOverlay {
  constructor(public templateRef: TemplateRef<any>) {}
}
