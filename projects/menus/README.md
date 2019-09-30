# Menus

A Menu displays the list of choices available on a temporary surface. It appears when the user interacts with a button or other control.


## Usages

#### module.ts
```javascript

...

import { XotbMenusModule } from 'ng-xotb/navigators/menus';
import { XotbIconsModule } from 'ng-xotb/controls/icons'

@NgModule({
    imports:[XotbMenusModule, XotbIconsModule]
    ...
})

...
```

#### component.html
```html
<span xotbDropdown [(open)]="open">
    <button class="xotb-button xotb-button_neutral" xotbDropdownTrigger>
        <span class="xotb-truncate">Select an item</span>
        <xotb-icon
            iconName="chevron-down"
            variant="default"
            size="x-small"
            ></xotb-icon>
    </button>
    <div class="xotb-dropdown xotb-dropdown_left">
        <ul class="dropdown__list" role="menu">
        <li class="xotb-dropdown__item" *ngFor="let item of items">
            <a
                role="menuitem"
                xotbDropdownItem
                (click)="selected = item.value; open = false"
                >
                <p class="xotb-truncate">{{ item.value }}</p>
                <xotb-icon
                    [iconName]="item.icon"
                    variant="default"
                    size="x-small"
                ></xotb-icon
            ></a>
        </li>
        </ul>
    </div>
</span>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    selected: string;
    open: boolean;

    items = [
        { value: 'Item 1', icon: 'bar-chart' },
        { value: 'Item 2', icon: 'award' },
        { value: 'Item 3', icon: 'cast' }
    ];
}

...
```

## API
 
#### <xotb-file-upload>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[open]` | Whether the dropdown should be open or not | `string | TemplateRef` |  |
| `[handlePageEvents]` | Whether the dropdown should handle page events (e.g., clicking on the page closes the dropdown) | `boolean` | `false` |
| `(openChange)` | Emits an event whether the dropdown is going to open or not | `EventEmitter<boolean>` |  |

