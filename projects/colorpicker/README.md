# Colorpicker

The Color Picker tool allows a user to create, share and apply color palettes to your UI, as well as measure the accessibility level of a given color combination.

## Usages

#### module.ts
```javascript

...

import { XotbColorpickerModule } from 'ng-xotb/controls/colorpicker';

@NgModule({
    imports:[XotbColorpickerModule]
    ...
})

...
```

#### component.html
```html
<xotb-colorpicker
    [(ngModel)]="color"
    fieldLevelHelpTooltip="This is some useful info">
</xotb-colorpicker>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    color:string = '#5679C0';
}

...
```

## API
 
#### <xotb-carousel>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [variant] | Configures which tabs are present for the colorpicker. `base` means both `swatches` and `custom` tabs are present | `'base' | 'swatches' | 'custom'` | `'base'` |
| [required] | Highlights the field as a required field | `boolean` | `false` |
| [label] | An input label as for a form | `string` | 'Choose Color' |
| [placeholder] | Placeholder of input box | `string` |  |
| [fieldLevelHelpTooltip] | A tooltip that is displayed next to the label | `string | TemplateRef` |  |
| [readonlyInput] | Whether to make the hex color input readonly | `boolean` | `false` |
| [defaultSelectedTab] | Determines which tab is initially visible when popover opens | `'swatches' | 'custom'` | `'swatches'` |
| [swatchColors] | Hex color values which are used to set the options of the swatch tab of the colorpicker popover | `string` |  |
| [submitButtonLabel] | Text for submit button of popover | `string` | 'Done' |
| [cancelButtonLabel] | Text for cancel button on popover. | `string` | 'Cancel' |
| [swatchTabLabel] | Text for swatch tab of popover | `string` | 'Default' |
| [customTabLabel] | Text for custom tab of popover | `string` | 'Custom' |
| [invalidColorLabel] | Error message when hex color input is invalid | `string | TemplateRef` | 'Default' |

