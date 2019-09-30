import { Component } from '@angular/core';

@Component({
  templateUrl: './popovers.component.html',
  styles: [
    `
      :host {
        width: 400px;
        margin-left: 200px;
      }
    `
  ]
})
export class DemoPopoverComponent {
  open = false;
}
