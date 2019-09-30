import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbCheckbox } from './checkbox/checkbox';
import { XotbCheckboxInput } from './input/input';
import { XotbCheckboxButton } from './button/checkbox-button';

@NgModule({
  declarations: [XotbCheckbox, XotbCheckboxInput, XotbCheckboxButton],
  imports: [CommonModule, XotbInternalOutletModule],
  exports: [XotbCheckbox, XotbCheckboxInput, XotbCheckboxButton]
})
export class XotbCheckboxModule {}
