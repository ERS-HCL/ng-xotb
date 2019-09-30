import { InjectionToken } from '@angular/core';
import {
  FormStyle,
  getLocaleDayNames,
  getLocaleMonthNames,
  TranslationWidth,
  getLocaleFirstDayOfWeek
} from '@angular/common';

/** Injection token that can be used to specify default options. */
export const XOTB_DATEPICKER_CONFIG = new InjectionToken<XotbDatepickerConfig>(
  'xotb-datepicker-config'
);

export class XotbDatepickerConfig<D = any> {
  format: 'big-endian' | 'little-endian' | 'middle-endian' = 'big-endian';

  delimiter = '/';

  dropdownAlign: 'left' | 'right' = 'left';

  monthNames: string[];

  dayNamesShort: string[];

  dayNamesLong: string[];

  firstDayOfWeek: number;

  showToday = true;

  relativeYearFrom = -100;

  relativeYearTo = 10;

  openOnInputClick = true;

  todayLabel = 'Today';

  previousMonthLabel = 'Previous Month';

  nextMonthLabel = 'Next Month';

  constructor(locale: string) {
    this.monthNames = getLocaleMonthNames(
      locale,
      FormStyle.Standalone,
      TranslationWidth.Wide
    );
    this.dayNamesShort = getLocaleDayNames(
      locale,
      FormStyle.Standalone,
      TranslationWidth.Abbreviated
    );
    this.dayNamesLong = getLocaleDayNames(
      locale,
      FormStyle.Standalone,
      TranslationWidth.Wide
    );
    this.firstDayOfWeek = getLocaleFirstDayOfWeek(locale);
  }
}
