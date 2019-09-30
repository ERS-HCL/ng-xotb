import { Component } from '@angular/core';

@Component({
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class DemoIconButtonComponent {
  selected = true;
  iconType = 'border';
  sizes: string[] = ['x-small', 'small', 'large'];

  change() {
    this.selected = !this.selected;
    this.iconType = this.iconType === 'border' ? 'container' : 'border';
  }
}
