import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentsPageComponent implements OnInit {
  public categories: any;
  constructor() {}

  ngOnInit(): void {
    this.categories = [
      'Containers',
      'Navigators',
      'DataTable',
      'Template',
    ];
  }
}
