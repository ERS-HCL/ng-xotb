import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbIconButton } from './icon-button';
import { XotbIconButtonStateful } from './icon-button-stateful';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

@NgModule({
  declarations: [XotbIconButton, XotbIconButtonStateful],
  exports: [XotbIconButton, XotbIconButtonStateful],
  imports: [CommonModule, XotbIconsModule]
})
export class XotbIconButtonModule {}
