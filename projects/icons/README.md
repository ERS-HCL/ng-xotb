# Icons

Icons are delightful, beautifully-crafted symbols that are universally accepted and easily identifiable for the purpose of displaying common actions and items. 


## Usages

#### module.ts
```javascript
...

import { XotbIconsModule } from 'ng-xotb/controls/icons';

@NgModule({
    imports:[XotbIconsModule]
    ...
})

...
```

#### component.html
```html
    <xotb-icon iconName="activity" size="small"></xotb-icon>
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


## Properties <xotb-icon>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [iconName] | Name of the icon | `string` | |
| [variant] | Appearance of the icon | `'default'|'warning'|'error'|'light'|'inverse'|null` | `'default'`|
| [size] | Size of the icon | `'xx-small' | 'x-small' | 'small' | 'large'` | |
| [alternativeText] | Text to describe what happens when clicked; not what the icon looks like | `string` | |  