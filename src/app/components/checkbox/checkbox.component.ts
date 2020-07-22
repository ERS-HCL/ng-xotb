import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements OnInit {
  public categories: any;
  public moduleCode: string;
  public templateCode: string;
  public componentCode: string;
  public apiTableColums: any;
  public apiSource: any;
  constructor() {}

  ngOnInit(): void {
    this.apiTableColums = ['Property', 'Description', 'Type', 'Default'];
    this.apiSource = [
      {
        property: '[label]',
        description: 'Checkbox Label',
        type: 'string|TemplateRef',
        default: '',
      },
      {
        property: '[error]',
        description: 'Error message',
        type: 'string|TemplateRef',
        default: '',
      },
      {
        property: '[required]',
        description: 'Highlightd as required field',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[disabled]',
        description: 'Disable control',
        type: 'boolean',
        default: 'false',
      },
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
