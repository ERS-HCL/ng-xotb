# Tab

Tabs appear at the top or bottom of a UI and allow the users to quickly switch back and forth between the primary sections of the application. Tabs can be joined with components like the top app bars, embedded in a specific UI region, or nested into components like cards and sheets

## Usages

#### module.ts
```javascript

...
import { XotbTabsModule } from 'ng-xotb/navigators/tabs';

@NgModule({
    imports:[XotbTabsModule]
    ...
})

...
```

#### component.html
```html
<xotb-tabset [(selected)]="selectedTab" [variant]="variant">
    <ng-template xotb-tab label="Overview">
      You have {{ details.length }} details. 
    <ng-template>
    <xotb-tab
        *ngFor="let detail of details"
        (activate)="tabChange(detail, 'active')"
        (deactivate)="tabChange(detail, 'inactive')"
        >
        <ng-template xotb-tab-label>Detail <i>{{ detail }}</i></ng-template>
        <ng-template xotb-tab-content>
            <p>Some detail text for <b>{{ detail }}</b></p>
            <button
                type="button"
                xotbButton
                variant="destructive"
                (click)="removeDetail(detail)">Remove</button>
        </ng-template>
    </xotb-tab>
    <ng-template #heading>Summary</ng-template>
    <ng-template id="sum" xotb-tab #summaryTab="xotbTab" [label]="heading">Next last ID is {{ id }}.</ng-template>
</xotb-tabset>


<div>
  <button type="button" xotbButton variant="brand" (click)="addDetail()">
    Add Detail
  </button>
  <button type="button" xotbButton (click)="change()">Toggle scope</button>
  <button
    type="button"
    xotbButton
    (click)="selectedTab = summaryTab"
    [disabled]="isDisabled()"
  >
    Show Summary
  </button>
</div>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    variant = 'scoped';
    id = 0;
    selectedTab: any = 'sum';
    details: number[] = [];

    change() {
        this.variant = this.variant === 'scoped' ? null : 'scoped';
    }

    addDetail() {
        this.details.push(this.id++);
    }

    isDisabled() {
        return this.selectedTab === 'sum' || this.selectedTab.id === 'sum';
    }

    protected tabChange(detail: number, event: string) {
        console.log('detail', detail, event);
    }

    protected removeDetail(detail: Object) {
        this.details = this.details.filter(d => d !== detail);
        this.selectedTab = 'sum';
    }
}

...
```

## API
 
#### <xotb-tabset>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[selected]` | The desired Tab to be activated. This can be either the index number, Tab's ID (id="myid") or the actual XotbTab instance | `string | number | XotbTab` |  |
| `[variant]` | Whether the Tab set is scoped or not | `'default' | 'scoped'` | `'default'` |
| `[lazy]` | Whether every Tab's content is instantiated when visible, and destroyed when hidden | `boolean` | `true` |
| `(selectedChange)` | Emits when a Tab is selected | `EventEmitter<XotbTab>` |  |


#### <xotb-tab>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[label]` | Header text | `string` |  |
| `[id]` | Tab's ID in case you want to preselect or programmatically manipulate it | `string` |  |
| `(activate)` | Emits when a tab is becomes active | `EventEmitter<XotbTab>` |  |
| `(deactivate)` | Emits when a tab is becomes inactive | `EventEmitter<XotbTab>` |  |
