import { Component } from '@angular/core';

@Component({
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class DemoCheckboxesComponent {
  hasError = false;
  required = false;
  disabled = false;
  error = 'error, invalid';
}
