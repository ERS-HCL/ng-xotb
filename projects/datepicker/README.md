# DatePicker

A Datepicker lets the users select a date from calendar, or a range of dates, it also allows users to enter a date through text input.

## Usages

#### module.ts
```javascript

...

import { XotbDatepickerModule } from 'ng-xotb/controls/datepicker';

@NgModule({
    imports:[XotbDatepickerModule]
    ...
})

...
```

#### component.html
```html
<xotb-datepicker-input
    label="Start Date"
    name="fieldName"
    ngDefaultControl
    [(ngModel)]="value"
    #dt="ngModel"
    [class.xotb-has-error]="!dt.valid"
></xotb-datepicker-input>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    value = new Date();
}

...
```

## API
 
#### <xotb-datepicker-input>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [value] | The date value | `Date` |  |
| [dropdownAlign] | Aligns the right or left side of the dropdown menu with the respective side of the input | `'left' | 'right'` | `'left'` |
| [label] | Label that appears above the input | `string | TemplateRef<any>` |  |
| [placeholder] | Placeholder of input | `string` |  |
| [format] | Pre-defined format to use | `'big-endian' | 'little-endian' | 'middle-endian'` | `'big-endian'` |
| [delimiter] | Delimiter to use on pre-defined formats | `string` | `'/'` |
| [disabled] | Disable input and calendar | `boolean` | `false` |
| [readonlyInput] | Whether input is readonly and calendar is available for date selection | `boolean` | `false` |
| [openOnInputClick] | Whether to open the datepicker when a mouse user clicks on the input | `boolean` | `true` |
| [selectDateLabel] | Text for button to open calendar. | `string` | `'Select a date'` |
| (valueChange) | Emits the selected date. | `EventEmitter<Date>` |  |
