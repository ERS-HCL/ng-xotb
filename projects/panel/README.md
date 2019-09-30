# Panel

An expandable container, Panel, can be useful to show and hide section of your UI and therefore, declutter your app


## Usages

#### module.ts
```javascript

...

import { XotbPanelModule } from 'ng-xotb/containers/panel';

@NgModule({
    imports:[XotbPanelModule]
    ...
})

...
```

#### component.html
```html
<xotb-panel title="Section Title">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec
  adipiscing tristique risus nec feugiat. Augue eget arcu dictum varius duis.
  Sed tempus urna et pharetra pharetra massa massa ultricies mi. Semper quis
  lectus nulla at volutpat diam. Vel orci porta non pulvinar neque laoreet. Amet
  facilisis magna etiam tempor orci eu. Vitae tortor condimentum lacinia quis
  vel eros. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Sit
  amet luctus venenatis lectus magna fringilla urna. Id ornare arcu odio ut sem
  nulla pharetra diam sit.
</xotb-panel>
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
 
#### <xotb-panel>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[title]` | Panel's title | `string` |  |


