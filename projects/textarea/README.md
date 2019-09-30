# Textarea

Text fields allow the user to input, edit and select text.

## Usages

#### module.ts
```javascript

...

import { XotbTextareaModule } from 'ng-xotb/controls/textarea';

@NgModule({
    imports:[XotbTextareaModule]
    ...
})

...
```

#### component.html
```html
<xotb-textarea label="Input Label" [error]="hasError ? error : null">
    <textarea
        xotb
        [required]="required"
        [disabled]="disabled"
        placeholder="Placeholder Text"
        ></textarea>
</xotb-textarea>
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

## API <xotb-input>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [label] | Text Area Label | `string|TemplateRef` | |
| [fieldLevelHelpTooltip] | A tooltip that is displayed next to the label | `string|TemplateRef'`|
| [error] | Error Message | `string|TemplateRef` | |
| [required] | Highlights as required field | `boolean` | false |
| [disabled] | Disable field | `boolean` | false | 