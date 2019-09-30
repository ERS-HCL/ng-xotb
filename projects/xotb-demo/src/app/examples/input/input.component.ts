import { Component } from '@angular/core';

@Component({
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class DemoInputComponent {
  hasError = false;
  required = true;
  error = 'invalid data';
  disabled = false;
}
