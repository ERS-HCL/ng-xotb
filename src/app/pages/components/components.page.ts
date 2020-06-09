import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentsPageComponent implements OnInit {
  public categories: any;
  public apiData: any;
  constructor() {}

  ngOnInit(): void {
    this.categories = ['Containers', 'Navigators', 'DataTable', 'Template'];
    // This is dummy structure
    this.apiData = [
      'Property',
      'Description',
      'Type',
      'Default',
      '[label]',
      'Checkbox Label',
      'string|TemplateRef',
      '',
      '[error]',
      'Error message',
      'string|TemplateRef',
      '',
      '[required]',
      'as required',
      'boolean',
      'false',
      '[disabled]',
      'Disable control',
      'boolean',
      'false',
    ];
  }
}
