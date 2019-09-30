# Ratings

Ratings provide an insight regarding users’ opinions and experiences with a particular product or an application

## Usages

#### module.ts
```javascript

...
import { XotbRatingsModule } from 'ng-xotb/controls/ratings';

@NgModule({
    imports:[XotbRatingsModule]
    ...
})

...
```
#### component.html

```html
<xotb-rating
    [(rate)]="value"
    [isReadonly]="readonly"
    [size]="size"
    [colorOn]="color"
  ></xotb-rating>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    value = 3;
    readonly = false;
    size = 'small';
    color = '#FFB75D';
}

...
```

## API
 
#### <xotb-rating>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[rate]` | Current rate value | `number` | `0` |
| `[max]` | Maximum rate number | `number` | `5` |
| `[isReadonly]` | Prevent user's interaction | `boolean` | `false` |
| `[icon]` | Name of the icon | `string` | |
| `[size]` | Icon sizes | `string` | |
| `[colorOn]` | Color when active | `string` | |
| `[colorOff]` | Color when not active | `string` | |
| `(rateChange)` | The click rate | `EventEmitter<number>` | |
| `(hover)` | The current hover rate | `EventEmitter<number>` | |
