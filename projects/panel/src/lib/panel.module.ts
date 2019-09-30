import { XotbIconsModule } from 'ng-xotb/controls/icons';
import { NgModule } from '@angular/core';
import { XotbPanel } from './panel';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [XotbPanel],
  imports: [CommonModule, XotbIconsModule],
  exports: [XotbPanel]
})
export class XotbPanelModule {}
