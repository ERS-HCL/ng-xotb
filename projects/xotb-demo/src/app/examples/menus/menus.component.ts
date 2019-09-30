import { Component } from '@angular/core';

@Component({
  templateUrl: './menus.component.html'
})
export class DemoMenusComponent {
  selected: string;
  open: boolean;

  items = [
    { value: 'Item 1', icon: 'bar-chart' },
    { value: 'Item 2', icon: 'award' },
    { value: 'Item 3', icon: 'cast' }
  ];

  onToggle($event: Event) {
    $event.stopPropagation();
    this.open = true;
  }
}
