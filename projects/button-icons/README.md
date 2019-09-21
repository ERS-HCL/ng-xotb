# ButtonIcons

An Icon Button allows the user to take actions and make choices, with a single click/tap. It can be used to toggle between an on and off icon.

## Usages

### module.ts
```javascript

...
import { XotbButtonIconsModule } from 'ng-xotb/controls/button-icons';

@NgModule({
    imports:[XotbButtonIconsModule]
    ...
})

...
```

### component.html
```html
<button
    type="button"
    xotbButtonIcon
    iconName="airplay"
    title="Airplay">
</button>
```

### component.ts
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
 
### [xotbButtonIcon]

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[iconName]` | Label that appears above the upload area | `string | TemplateRef` |  |
| `[alternativeText]` | Highlights the field as a required field | `boolean` | `false` |
| `[variant]` | Appearance of the button | `'border' | 'border-filled' | 'border-inverse'` | `'border'` |
| `[size]` | Can be displayed in three smaller sizes | `'small' | 'x-small' | 'xx-small'` | `false` |
| `[svgClass]` | Extra class(es) you want to apply to SVG element | `ngClass` |  |
