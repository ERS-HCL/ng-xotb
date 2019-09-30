# Slider

The Sliders have become the de facto standard UI control for selecting a value or a range of values. A Slider is helpful because it allows the users to explore and make selections quickly from a range of available options.


## Usages

#### module.ts
```javascript

...

import { XotbSliderModule } from 'ng-xotb/controls/slider';

@NgModule({
    imports:[XotbSliderModule]
    ...
})

...
```

#### component.html
```html
<xotb-slider [(value)]="value" label="Slider label"></xotb-slider>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    value = 70;
}

...
```

## API
 
#### <xotb-section>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[title]` | Section's title | `string` |  |
| `[open]` | Whether the section's body is collapsed or not | `boolean` | `false` |
| `[collapsible]` | Whether the section's body is able to collapse or not | `boolean` | `true` |
| `(openChange)` | Emits event when the body is going collapse or open | `EventEmitter<boolean>` |  |

