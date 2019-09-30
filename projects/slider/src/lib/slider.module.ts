import { NgModule } from '@angular/core';
import { XotbSlider } from './slider';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [XotbSlider],
  imports: [CommonModule, XotbInternalOutletModule],
  exports: [XotbSlider]
})
export class XotbSliderModule {}
