import { Component } from '@angular/core';

@Component({
  templateUrl: './textarea.component.html',
  styles: [
    `
      .xotb-textarea {
        width: 50%;
      }
    `
  ]
})
export class DemoTextareaComponent {
  hasError = false;
  required = false;
  disabled = false;
  error = 'error in textarea';
}
