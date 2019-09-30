import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[xotbBreadcrumb]'
})
export class XotbBreadcrumb {
  constructor(public templateRef: TemplateRef<any>) {}
}
