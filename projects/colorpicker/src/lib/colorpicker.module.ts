import { NgModule } from '@angular/core';
import { XotbColorpicker } from './colorpicker';
import { CommonModule } from '@angular/common';

import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import { XotbFormsModule } from 'ng-xotb/controls/forms';
import { XotbPopoversModule } from 'ng-xotb/controls/popovers';
import { XotbTabsModule } from 'ng-xotb/navigators/tabs';

import { XotbColorpickerSwatch } from './swatch/colorpicker-swatch';
import { XotbColorpickerCustom } from './custom/colorpicker-custom';
import { XotbColorpickerRange } from './custom/range/colorpicker-range';
import { XotbColorpickerInputs } from './custom/inputs/colorpicker-inputs';
import { XotbColorpickerSwatches } from './swatches/colorpicker-swatches';
import { XotbColorpickerSwatchTrigger } from './swatches/trigger';

const DIRECTIVES = [XotbColorpicker];

@NgModule({
  declarations: [
    ...DIRECTIVES,
    XotbColorpickerSwatch,
    XotbColorpickerCustom,
    XotbColorpickerRange,
    XotbColorpickerInputs,
    XotbColorpickerSwatches,
    XotbColorpickerSwatchTrigger
  ],
  imports: [
    CommonModule,
    XotbIconsModule,
    XotbTabsModule,
    XotbPopoversModule,
    XotbFormsModule,
    XotbInternalOutletModule
  ],
  exports: DIRECTIVES
})
export class XotbColorpickerModule {}
