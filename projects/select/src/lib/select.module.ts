import { NgModule } from '@angular/core';
import { XotbFormsModule } from 'ng-xotb/controls/forms';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbSelect } from './select';
import { XotbSelectInput } from './select-input';

@NgModule({
  declarations: [XotbSelect, XotbSelectInput],
  imports: [CommonModule, XotbFormsModule, XotbInternalOutletModule],
  exports: [XotbSelect, XotbSelectInput]
})
export class XotbSelectModule {}
