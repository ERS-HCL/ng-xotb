# RadioGroup

Radio buttons allow the user to select one option from a set while being able to view all the available options.


## Usages

#### module.ts
```javascript

...

import { XotbRadioGroupModule } from 'ng-xotb/controls/radio-group';


@NgModule({
    imports:[XotbRadioGroupModule]
    ...
})

...
```

#### component.html
```html
<fieldset
    xotb-radio-group
    label="Radio Group Label"
    [error]="hasError ? error : null"
    [required]="required"
>
    <xotb-radio-option label="Radio Label 1">
        <input xotb type="radio" [disabled]="disabled" />
    </xotb-radio-option>
    <xotb-radio-option label="Radio Label 2">
        <input xotb type="radio" [disabled]="disabled" />
    </xotb-radio-option>
</fieldset>
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

## Properties <xotb-radio-group>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [label] | Radio option Label | `string|TemplateRef` | |
| [error] | Error message | `string|TemplateRef`| |
| [required] | Highlights as required field | `boolean` | false |
| [disabled] | Disable control | `boolean` | false | 