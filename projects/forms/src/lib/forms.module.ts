import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbTooltipsModule } from 'ng-xotb/controls/tooltips';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

import { XotbFormLabel } from './components/xotb-form-label';
import { XotbFormHelp } from './components/xotb-help';
import { XotbInternalOutletModule } from 'ng-xotb/utility';

const COMPONENTS = [XotbFormLabel, XotbFormHelp];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    XotbInternalOutletModule,
    XotbTooltipsModule,
    XotbIconsModule
  ],
  exports: [COMPONENTS]
})
export class XotbFormsModule {}
