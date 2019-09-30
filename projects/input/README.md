# Input

The Input field allows a user to enter or edit a text into a UI (value or description), typically in a single line. These fields generally appear in forms and dialogs.

## Usages

#### module.ts
```javascript

...

import { XotbInputModule } from 'ng-xotb/controls/input';

@NgModule({
    imports:[XotbInputModule]
    ...
})

...
```

#### component.html
```html
<xotb-input
    label="Input Label"
    fieldLevelHelpTooltip="Some helpful information"
    [error]="hasError ? error : null"
    >
    <input
        xotb
        type="input"
        [required]="required"
        [disabled]="disabled"
        placeholder="Placeholder Text"
    />
</xotb-input>
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

## Properties <xotb-input>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [label] | Input Label | `string|TemplateRef` | |
| [fieldLevelHelpTooltip] | A tooltip that is displayed next to the label | `string|TemplateRef'`|
| [error] | Error Message | `string|TemplateRef` | |
| [required] | Highlights as required field | `boolean` | false |
| [disabled] | Disable control | `boolean` | false | 