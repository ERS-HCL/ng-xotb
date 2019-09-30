# Select

Select components are used for collecting the user-provided information from a given list of options.

## Usages

#### module.ts
```javascript

...
import { XotbSelectModule } from 'ng-xotb/controls/select';

@NgModule({
    imports:[XotbSelectModule]
    ...
})

...
```
#### component.html

```html
<select xotb [required]="required" [disabled]="disabled">
    <option>Option One</option>
    <option>Option Two</option>
    <option>Option Three</option>
</select>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {}

...
```

## API
 
#### <xotb-select>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [label] | Select Label | `string|TemplateRef` | |
| [fieldLevelHelpTooltip] | A tooltip that is displayed next to the label | `string|TemplateRef'`|
| [error] | Error Message | `string|TemplateRef` | |
| [required] | Highlights as required field | `boolean` | false |
| [disabled] | Disable control | `boolean` | false | 