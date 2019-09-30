import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XotbRadioGroup } from './radio-group';
import { XotbRadioOption } from './radio-option';
import { XotbRadioInput } from './input/input';

@NgModule({
  declarations: [XotbRadioGroup, XotbRadioOption, XotbRadioInput],
  imports: [CommonModule, XotbInternalOutletModule],
  exports: [XotbRadioOption, XotbRadioGroup, XotbRadioInput]
})
export class XotbRadioGroupModule {}
