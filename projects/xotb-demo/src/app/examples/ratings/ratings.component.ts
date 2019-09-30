import { Component } from '@angular/core';

@Component({
  templateUrl: './ratings.component.html'
})
export class DemoRatingsComponent {
  value = 3;
  readonly = false;
  size = 'small';
  color = '#FFB75D';

  private sizes = ['x-small', 'small', '', 'large'];
  private colors = ['#FFB75D', '#F5675B', '#9FDB66'];

  changeSize() {
    this.size = this.sizes[
      (this.sizes.indexOf(this.size) + 1) % this.sizes.length
    ];
  }

  changeColor() {
    this.color = this.colors[
      (this.colors.indexOf(this.color) + 1) % this.colors.length
    ];
  }

  customImage(isActive: boolean) {
    return `assets/images/avatar${isActive ? 3 : 2}.jpg`;
  }
}
