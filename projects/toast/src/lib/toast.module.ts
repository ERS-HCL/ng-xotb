import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbToast } from './toast';
import { XotbToastClose } from './toast-close';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

const TOAST_DIRECTIVES = [XotbToast, XotbToastClose];

@NgModule({
  declarations: [TOAST_DIRECTIVES],
  exports: [TOAST_DIRECTIVES],
  imports: [CommonModule, XotbIconsModule]
})
export class XotbToastModule {}
