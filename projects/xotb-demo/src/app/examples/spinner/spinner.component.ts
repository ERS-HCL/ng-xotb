import { Component } from '@angular/core';

@Component({
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class DemoSpinnerComponent {
  variant: string = null;
  size = 'large';

  change() {
    this.variant = this.variant === 'brand' ? null : 'brand';
    this.size = this.size === 'large' ? 'small' : 'large';
  }
}
