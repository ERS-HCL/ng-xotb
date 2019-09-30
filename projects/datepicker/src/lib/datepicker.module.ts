import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
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
import { XotbIconsModule } from 'ng-xotb/controls/icons';

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
    XotbInternalOutletModule,
    OverlayModule,
    XotbClickOutsideModule,
    XotbOverlayModule,
    XotbIconsModule
  ],
  providers: [XotbDateAdapter]
})
export class XotbDatepickerModule {}
