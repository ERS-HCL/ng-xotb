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
  public moduleCode: string;
  public templateCode: string;
  public componentCode: string;
  constructor() {}

  ngOnInit(): void {
    this.categories = ['Navigators', 'DataTable', 'Template'];
    // This is dummy structure
    this.apiData = [
      'Property',
      'Description',
      'Type',
      'Default',
      '[label]',
      'Checkbox Label',
      'string',
      '',
      '[error]',
      'Error message',
      'string',
      '',
      '[required]',
      'As required',
      'boolean',
      'false',
      '[disabled]',
      'Disable control',
      'boolean',
      'false',
    ];

    this.moduleCode = `
    ...

    import { XotbCheckboxesModule } from 'ng-xotb/controls/checkboxes';

    @NgModule({
        imports:[XotbCheckboxesModule]
        ...
    })

    ...`;

    this.templateCode = `    <xotb-checkbox label="Checkbox Label" [error]="hasError ? error : null">
      <input xotb type="checkbox" [required]="required" [disabled]="disabled" />
    </xotb-checkbox>`;

    this.componentCode = `
    ...

    @Component({
        templateUrl:'./component.html',
        ...
    })
    export class DemoComponent {

        required: boolean = false;

        disabled: boolean = false;

        hasError: boolean = false;

        error:string = "This Input has some error"

    }

    ...`;
  }
}
