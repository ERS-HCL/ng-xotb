import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbToast } from './toast';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbToast],
  imports: [CommonModule, XotbIconsModule, XotbThemeModule],
  exports: [XotbToast]
})
export class ToastModule {}
