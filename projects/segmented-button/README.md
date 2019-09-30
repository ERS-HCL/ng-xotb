# SegmentedButton

Make a group of elements behave like a set of radio buttons by using `xotbSegmentedButton` and `xotbSegmentedButtonOption`. You can alternatively make them behave like a set of checkboxes, by attaching the `xotbSegmentedButtonMultiple` directive.

If you need to specify a custom class when the element is currently selected you can define the `xotbSegmentedButtonActiveClass` property either on the host element of `xotbSegmentedButton` or on each `xotbSegmentedButtonOption` if you want to override it

## Usages

#### module.ts
```javascript

...

import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbSegmentedButtonModule } from 'ng-xotb/controls/segmented-button'

@NgModule({
    imports:[XotbSegmentedButtonModule, XotbButtonsModule]
    ...
})

...
```

#### component.html
```html
<div
    class="xotb-button-group"
    [(xotbSegmentedButton)]="selected"
    xotbSegmentedButtonActiveClass="xotb-button_brand"
    role="group"
    >
    <button type="button" xotbButton xotbSegmentedButtonOption="left">Left</button>
    <button type="button" xotbButton xotbSegmentedButtonOption="middle">Middle</button>
    <button type="button" xotbButton [xotbSegmentedButtonOption]="'right'">Right</button>
</div>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    selected: 'middle'
}

...
```

## API
 
#### [xotbSegmentedButton]

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[xotbSegmentedButton]` | Currently selected option value | `any` |  |
| `[xotbSegmentedButtonMultiple]` | Whether multiple options can be selected. In this case, the `xotbSegmentedButton` value should be an `array` or `object` | `boolean` | `false` |
| `[xotbSegmentedButtonActiveClass]` | Defines a custom class to be used when any of the options is selected | `string` |  |
| `(xotbSegmentedButtonChange)` | The value that will be selected when an `xotbSegmentedButtonOption` is selected | `EventEmitter` |  |
| `(xotbOptionDestroyed)` | Emits the value of any selected option that is destroyed  | `EventEmitter` |  |


#### [xotbSegmentedButtonOption]

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[xotbSegmentedButtonOption]` | Option's value | `any` |  |
| `[xotbSegmentedButtonActiveClass]` | Defines a custom class to be used when the option is selected. Overrides the parent's `xotbSegmentedButton` active class, if defined | `string` |  |
