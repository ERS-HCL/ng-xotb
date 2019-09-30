import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import { XotbFormsModule } from 'ng-xotb/controls/forms';

import { XotbCombobox } from './combobox';
import { XotbComboboxOption } from './combobox-option';
import { XotbComboboxInput } from './combobox-input';

const DIRECTIVES = [XotbCombobox, XotbComboboxOption, XotbComboboxInput];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [
    CommonModule,
    XotbInternalOutletModule,
    XotbIconsModule,
    XotbFormsModule,
    OverlayModule
  ]
})
export class XotbComboboxesModule {}
