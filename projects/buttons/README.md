# Buttons

Buttons allow the user to trigger an action or make a selection with a single tap or a click. They form an integral part of a UI and are often present in dialogs, modal windows, forms, cards and toolbars.

## Usages

#### module.ts
```javascript

...

import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

@NgModule({
    imports:[XotbButtonsModule]
    ...
})

...
```

#### component.html
```html
<button xotbButton variant="neutral">normal button</button>
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

#### [xotbButton]

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [variant] | Appearance of the button | `'base'|'neutral'|'brand'|'outline-brand'|'destructive' |'text-destructive'|'inverse'|'success'` | ‘neutral’ |
| [iconName] | Name of the Icon | `string'`|
| [iconPosition] | Position of the icon | `‘left’ | ‘right’` | ‘left’ |
| [disabled] | Disable control | `boolean` | false | 