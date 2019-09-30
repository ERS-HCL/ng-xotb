# Progressbar

Progress Bars inform the users about the status of ongoing processes, such as the loading of an app, submitting a form, or saving the updates. They communicate an app’s state and indicate the available actions, such as whether the users can navigate away from the current screen.

## Usages

#### module.ts
```javascript

...
import { XotbProgressbarModule } from 'ng-xotb/controls/progressbar';

@NgModule({
    imports:[XotbProgressbarModule]
    ...
})

...
```

#### component.html
```html
<xotb-progress-bar
      [value]="value"
      [size]="size"
      [variant]="variant"
    ></xotb-progress-bar>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    value = 40;
    variant: string = null;
    size = 'large';
}

...
```

## API
 
#### <xotb-progress-bar>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[value]` | The percentage value.  | `number` |  |
| `[size]` | Size of the progress bar | `'x-small' | 'small' | 'medium' | 'large'` | `'medium'` |
| `[variant]` | Variant appearance of the progress bar | `'circular'` |  |