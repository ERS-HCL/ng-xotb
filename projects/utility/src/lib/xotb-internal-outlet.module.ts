import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbInternalOutlet } from './xotb-internal-outlet';

@NgModule({
  declarations: [XotbInternalOutlet],
  exports: [XotbInternalOutlet],
  imports: [CommonModule]
})
export class XotbInternalOutletModule {}
