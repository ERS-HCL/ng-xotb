import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import * as icons from 'angular-feather/icons';
import { XotbIcon } from './icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [XotbIcon],
  imports: [FeatherModule.pick({ ...icons }), CommonModule],
  exports: [FeatherModule, XotbIcon]
})
export class XotbIconsModule {}
