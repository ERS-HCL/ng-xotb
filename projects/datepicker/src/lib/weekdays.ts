import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[xotbWeekdays]',
  templateUrl: './weekdays.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrls: ['./datepicker.component.scss']
})
export class XotbDatepickerWeekdays implements OnChanges {
  @Input() dayNamesShort: string[];
  @Input() dayNamesLong: string[];
  @Input() firstDayOfWeek: number;

  weekdays: any[] = [];

  ngOnChanges(changes?: any) {
    this.weekdays = [];
    for (let i = 0; i < 7; i++) {
      const offset = (this.firstDayOfWeek + i) % 7;
      this.weekdays.push({
        id: `weekday-${i}`,
        label: this.dayNamesShort[offset],
        title: this.dayNamesLong[offset]
      });
    }
  }
}
