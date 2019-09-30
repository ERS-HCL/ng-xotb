# Spinner

This component can be used to generate dynamic animations of various sizes and colors, that should be shown when retrieving data or performing slow computations.

## Usages

#### module.ts
```javascript

...
import { XotbSpinnerModule } from 'ng-xotb/controls/spinner';

@NgModule({
    imports:[XotbSpinnerModule]
    ...
})

...
```

#### component.html
```html
<xotb-spinner alternativeText="Loading" size="small"></xotb-spinner>
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
 
#### <xotb-progress-bar>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[size]` | Size of the progress bar | `'x-small' | 'small' | 'medium' | 'large'` | `'medium'` |
| `[alternativeText]` | Used to describe the reason for the wait and need for a spinner | `string` | |
