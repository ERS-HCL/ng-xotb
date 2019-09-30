import { NgModule } from '@angular/core';
import { Tree } from './tree';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

@NgModule({
  declarations: [Tree],
  imports: [CommonModule, XotbIconsModule],
  exports: [Tree]
})
export class XotbTreeModule {}
