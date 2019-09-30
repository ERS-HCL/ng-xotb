# Tooltips

A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing

## Usages

#### module.ts
```javascript

...
import { XotbTooltipsModule } from 'ng-xotb/controls/tooltips';

@NgModule({
    imports:[XotbTooltipsModule]
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
| `[xotbTooltip]` | The body as string or the connected template reference to show  | `string | TemplateRef` |  |
| `[xotbTooltipOpen]` | Whether the floating tooltip is visible. Be sure to use two-way binding | `boolean` |  |
| `[xotbTooltipOpenAuto]` | Gives the possibility to open/close without binding to `[xotbTooltipOpen]`| `boolean` | `false` |
| `[xotbTooltipPlacement]` | Position relative to host element | `'top'` \| `'top-left'` \| `'top-left-corner'` \| `'top-right'` \| `'top-right-corner'` \| `'right'` \| `'right-top'` \| `'right-top-corner'` \| `'right-bottom'` \| `'right-bottom-corner'` \| `'bottom'` \| `'bottom-left'` \| `'bottom-left-corner'` \| `'bottom-right'` \| `'bottom-right-corner'` \| `'left'` \| `'left-top'` \| `'left-top-corner'` \| `'left-bottom'` \| `'left-bottom-corner'` | `'top'` |
| `[xotbTooltipClass]` | Extra class(es) you want to apply to popover host element | `ngClass` |  |
| `[xotbTooltipDelay]` | Delay in milliseconds until it opens/closes. If you wish to specify different delays for opening and closing, you may provide an array of two different values. | `number | number[]` |  |
| `[xotbTooltipInteractive]` | Give the possibility to interact with the content of the tooltip. User has to move the cursor to the tooltip before it starts closing (this lapse of time has its duration set by the `xotbTooltipDelay` option) | `boolean` | `false` |
| `(xotbTooltipOpenChange)` | Emit an event when the popover should show or hide | `boolean | 'x' | 'backdrop' | 'escape'` |  |

