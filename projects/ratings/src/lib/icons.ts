import { Directive, TemplateRef } from '@angular/core';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[xotbRatingIcon]' })
// tslint:disable-next-line: directive-class-suffix
export class XotbRatingIconTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}
