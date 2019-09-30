# Popovers

A Popover can be used to display some content on top of another. It is a transient view that shows on a content screen when a user clicks on a control button or within a defined area

## Usages

#### module.ts
```javascript

...
import { XotbPopoversModule } from 'ng-xotb/controls/popovers';

@NgModule({
    imports:[XotbPopoversModule]
    ...
})

...
```

#### component.html
```html
<button
  type="button"
  xotbButton
  [xotbPopover]="tip"
  xotbPopoverPlacement="right"
  xotbPopoverHeader="Header"
  xotbPopoverFooter="Footer"
  [(xotbPopoverOpen)]="open"
>
  Click me
</button>
<ng-template #tip
  >Popover lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
  ipsum lorem ipsum</ng-template
>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {

    open: boolean = false;
}

...
```

## API
 
#### <xotb-modal>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[xotbPopover]` | The body as string or the connected template reference to show  | `string | TemplateRef` |  |
| `[xotbPopoverHeader]` | The header as string or the connected template reference to show | `string | TemplateRef` |  |
| `[xotbPopoverFooter]` | The footer as string or the connected template reference to show. | `string | TemplateRef` |  |
| `[xotbPopoverOpen]` | Whether the floating popover is visible. Be sure to use two-way binding, for example: `[(xotbPopoverOpen)]="open"` | `boolean` |  |
| `[xotbPopoverPlacement]` | Position relative to host element | `'top'` \| `'top-left'` \| `'top-left-corner'` \| `'top-right'` \| `'top-right-corner'` \| `'right'` \| `'right-top'` \| `'right-top-corner'` \| `'right-bottom'` \| `'right-bottom-corner'` \| `'bottom'` \| `'bottom-left'` \| `'bottom-left-corner'` \| `'bottom-right'` \| `'bottom-right-corner'` \| `'left'` \| `'left-top'` \| `'left-top-corner'` \| `'left-bottom'` \| `'left-bottom-corner'` | `'top'` |
| `[xotbPopoverVariant]` | Determines the variant of the popover. | `'walkthrough' | 'feature' | 'warning' | 'error' | 'panel'` |  |
| `[xotbPopoverSize]` | Determines the size of the popover | `'small' | 'medium' | 'large' | 'full-width'` |  |
| `[xotbPopoverClass]` | Extra class(es) you want to apply to popover host element | `ngClass` |  |
| `[xotbPopoverCloseVisible]` | Whether or not to override the close button's visibility, if (xotbPopoverOpenChange) is bound | `boolean` | `true` |
| `[xotbPopoverCloseTitle]` | Close button title (and assistive text) | `string` | 	'Close dialog' |
| `(xotbPopoverOpenChange)` | Emit an event when the popover should show or hide | `boolean | 'x' | 'backdrop' | 'escape'` |  |

