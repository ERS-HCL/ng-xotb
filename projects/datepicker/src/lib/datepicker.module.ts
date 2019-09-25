import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbClickOutsideModule } from 'ng-xotb/common';

import { XotbDatepicker } from './datepicker.component';
import { XotbDatepickerInput } from './input/datepicker-input';

import { XotbDatepickerWeekdays } from './weekdays';
import { XotbDay } from './day';
import { XotbDatepickerYear } from './year';
import { XotbDatepickerMonth } from './month';

import { XotbDateAdapter } from './adapters/date-fns-adapter';
import { XotbOverlayModule } from 'ng-xotb/common';

const EXPORTS = [XotbDatepickerInput, XotbDatepicker];

@NgModule({
  declarations: [
    ...EXPORTS,
    XotbDay,
    XotbDatepickerMonth,
    XotbDatepickerWeekdays,
    XotbDatepickerYear
  ],
  exports: EXPORTS,
  imports: [
    CommonModule,
    FormsModule,
    XotbIconsModule,
    XotbInternalOutletModule,
    OverlayModule,
    XotbClickOutsideModule,
    XotbOverlayModule
  ],
  providers: [XotbDateAdapter]
})
export class XotbDatepickersModule {}
