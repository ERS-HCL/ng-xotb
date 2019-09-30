import { Component } from '@angular/core';

@Component({
  templateUrl: './select.component.html'
})
export class DemoSelectComponent {
  required = true;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
