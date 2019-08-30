import { XotbIconsModule } from 'ng-xotb/icons';
import { NgModule } from '@angular/core';
import { XotbSections } from './sections';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [XotbSections],
  imports: [CommonModule, XotbIconsModule, XotbThemeModule],
  exports: [XotbSections]
})
export class XotbSectionsModule {}
