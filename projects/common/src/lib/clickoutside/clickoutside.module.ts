import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbClickOutsideDirective } from './clickoutside';

const DIRECTIVES = [XotbClickOutsideDirective];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class XotbClickOutsideModule {}
