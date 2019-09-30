import { Component } from '@angular/core';
@Component({
  templateUrl: 'segmented-button.component.html'
})
export class DemoSegmentedButtonComponent {
  selected = 'middle';

  multiple = ['middle', 'right'];

  multipleObject = {
    left: true,
    middle: true
  };
}
