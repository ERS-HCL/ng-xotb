import { Component } from '@angular/core';

@Component({
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class DemoComboboxesComponent {
  options = ['One', 'Two', 'Three'];

  selection: string = null;

  open = false;
}
