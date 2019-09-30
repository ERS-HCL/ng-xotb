import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
  NgZone,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { take } from 'rxjs/operators';
import {
  XotbInternalDate,
  split,
  getToday,
  isEqualDate,
  numberOfDaysInMonth,
  isDisabled
} from './util';
import { XotbDay } from './day';

interface IXotbDayCell extends XotbInternalDate {
  today: boolean;
  isCurrentMonth: boolean;
  selected?: boolean;
  active?: boolean;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[xotbDatepickerMonth]',
  templateUrl: './month.html',
  // styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbDatepickerMonth implements OnChanges {
  @Input() readonly selected: XotbInternalDate;

  @Input() readonly year: number;

  @Input() readonly month: number;

  @Input() readonly day: number;

  @Input() readonly firstDayOfWeek: number;

  @Input() readonly minDate: XotbInternalDate;

  @Input() readonly maxDate: XotbInternalDate;

  @Input() readonly dateDisabled: (date: Date) => boolean | null = null;

  @Output() selectDate = new EventEmitter<XotbInternalDate>();

  @ViewChildren(XotbDay) days: QueryList<XotbDay>;

  weeks: IXotbDayCell[][];

  constructor(private ngZone: NgZone) {}

  indexTrackBy(index: number) {
    return index;
  }

  dateTrackBy(index: number, { year, month, day }: XotbInternalDate) {
    return `${day}-${month}-${year}`;
  }

  onSelect(date: XotbInternalDate) {
    if (date.disabled) return;

    this.selectDate.emit(date);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.year || changes.month || changes.firstDayOfWeek) {
      this.renderView();
      return;
    }

    if (changes.day) {
      this.updateActive();
    }

    if (changes.selected) {
      this.updateSelected();
    }

    if (changes.minDate || changes.maxDate || changes.dateDisabled) {
      this.updateDisabled();
    }
  }

  focusActiveDay() {
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onStable
        .asObservable()
        .pipe(take(1))
        .subscribe(() => {
          const active = this.days.find(d => d.isActive);
          if (active) {
            active.focus();
          }
        });
    });
  }

  private renderView() {
    const days = this.daysInMonth(this.year, this.month);

    Array.prototype.unshift.apply(
      days,
      this.daysInPreviousMonth(this.year, this.month)
    );
    const nextMonth = this.daysInNextMonth(
      this.year,
      this.month + 1,
      days.length
    );
    if (nextMonth) {
      Array.prototype.push.apply(days, nextMonth);
    }

    this.weeks = split(days);
  }

  private daysInMonth(year: number, month: number) {
    const last = numberOfDaysInMonth(year, month);
    return this.getDayObjects(year, month, 1, last);
  }

  private daysInPreviousMonth(year: number, month: number) {
    const firstIndex = new Date(year, month, 1).getDay();
    const last = new Date(year, month, 0).getDate();
    const numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;

    return this.getDayObjects(year, month - 1, last - numDays + 1, last, false);
  }

  private daysInNextMonth(year: number, month: number, numOfDays: number) {
    if (numOfDays % 7 === 0) {
      return;
    }
    return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), false);
  }

  private getDayObjects(
    year: number,
    month: number,
    from: number,
    to: number,
    isCurrentMonth = true
  ) {
    const today = getToday();
    const days: IXotbDayCell[] = [];
    for (let day = from; day <= to; day++) {
      const d: IXotbDayCell = {
        year,
        month,
        day,
        isCurrentMonth,
        today: isEqualDate(today, { year, month, day })
      };

      d.active = this.isActive(d);
      d.selected = this.isSelected(d);
      d.disabled = this.isDisabled(d);
      days.push(d);
    }
    return days;
  }

  private updateActive() {
    this.weeks.forEach((days: IXotbDayCell[]) => {
      days.forEach(day => {
        day.active = this.isActive(day);
      });
    });
  }

  private isActive(day: IXotbDayCell) {
    return day.isCurrentMonth && day.day === this.day;
  }

  private updateSelected() {
    this.weeks.forEach((days: IXotbDayCell[]) => {
      days.forEach(day => {
        day.selected = this.isSelected(day);
      });
    });
  }

  private isSelected(day: IXotbDayCell) {
    return isEqualDate(this.selected, day);
  }

  private updateDisabled() {
    this.weeks.forEach((days: IXotbDayCell[]) => {
      days.forEach(day => {
        day.disabled = this.isDisabled(day);
      });
    });
  }

  /** Date filter for the month */
  private isDisabled(d: IXotbDayCell): boolean {
    return (
      !d.isCurrentMonth ||
      isDisabled(d, this.dateDisabled, this.minDate, this.maxDate)
    );
  }
}
