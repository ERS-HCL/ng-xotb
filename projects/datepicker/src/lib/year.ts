import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import { uniqueId } from 'ng-xotb/utility';
import { InputNumber } from 'ng-xotb/utility';
import { XotbInternalDate } from './util';

@Component({
  selector: 'xotb-date-year',
  templateUrl: './year.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrls: ['./datepicker.component.scss']
})
export class XotbDatepickerYear implements OnChanges {
  uid = uniqueId('datepicker_year');

  @Input() from: XotbInternalDate;
  @Input() to: XotbInternalDate;

  @Input() @InputNumber() year: number;
  @Output() yearChange = new EventEmitter();

  range: number[];

  change($event: string) {
    this.yearChange.emit($event);
  }

  ngOnChanges() {
    this.range = this.getRange();
  }

  private getRange(): number[] {
    const minYear = Math.min(this.from.year, this.year);
    const maxYear = Math.max(this.to.year, this.year);
    const size = maxYear - minYear;
    return Array.apply(null, { length: size + 1 }).map(
      (value: any, index: number) => minYear + index
    );
  }
}
