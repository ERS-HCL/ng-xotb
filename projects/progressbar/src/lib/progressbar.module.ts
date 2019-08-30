import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbProgressbar } from './progressbar';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbProgressbar],
  imports: [CommonModule, XotbThemeModule],
  exports: [XotbProgressbar]
})
export class XotbProgressbarModule {}
