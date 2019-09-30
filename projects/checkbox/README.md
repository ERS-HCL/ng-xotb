# Checkbox

Check Boxes allow the user to select one or more items from a given set.


## Usages

#### module.ts
```javascript

...

import { XotbCheckboxesModule } from 'ng-xotb/controls/checkboxes';

@NgModule({
    imports:[XotbCheckboxesModule]
    ...
})

...
```

#### component.html
```html
<xotb-checkbox label="Checkbox Label" [error]="hasError ? error : null">
    <input xotb type="checkbox" [required]="required" [disabled]="disabled" />
</xotb-checkbox>
```

#### component.ts
```javascript

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

...
```

## API

#### <xotb-checkbox>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [label] | Checkbox Label | `string|TemplateRef` | |
| [error] | Error message | `string|TemplateRef`| |
| [required] | Highlights as required field | `boolean` | false |
| [disabled] | Disable control | `boolean` | false | 