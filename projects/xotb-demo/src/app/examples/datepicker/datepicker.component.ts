import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./datepicker-component.css']
})
export class DemoDatePickerComponent {
  value = new Date();
}
