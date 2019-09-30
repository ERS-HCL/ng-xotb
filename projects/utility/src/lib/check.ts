import { TemplateRef } from '@angular/core';

export function isTemplateRef(value: any): boolean {
  return value instanceof TemplateRef;
}
