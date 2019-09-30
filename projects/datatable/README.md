# Datatable

A Data Table displays sets of data in a grid-like format of rows and columns. It organizes information in a way that’s easy to scan, so that users can look for patterns and insights

## Usages

#### module.ts
```javascript

...
import { XotbDatatableModule } from 'ng-xotb/datatable';

@NgModule({
    imports:[XotbDatatableModule]
    ...
})

...
```

#### component.html
```html
<table
  class="xotb-table_bordered xotb-max-medium-table_stacked-horizontal xotb-table_fixed-layout"
  xotb-datatable
  [data]="data"
  trackByKey="rank"
  [loading]="loading"
  [(sort)]="sort"
  (sortChange)="onSort($event)"
  (rowClick)="onRowClick($event)"
>
  <xotb-datatable-column
    heading="Rank"
    key="rank"
    sortable
  ></xotb-datatable-column>
  <xotb-datatable-column
    heading="Name"
    key="name"
    *ngIf="!hideName"
    truncate
    sortable
  ></xotb-datatable-column>
  <xotb-datatable-column
    heading="Surname"
    key="surname"
    truncate="true"
    sortable
  >
    <ng-template xotbDatatableCell let-row="row"
      ><b>{{ row.surname }}</b></ng-template
    >
  </xotb-datatable-column>
  <xotb-datatable-column heading="Points" key="points">
    <ng-template xotbDatatableHeading><strong>Points</strong></ng-template>
    <ng-template xotbDatatableCell let-value>
      <span>{{ value | number }}</span>
    </ng-template>
  </xotb-datatable-column>
  <!-- Loading overlay-->
  <ng-template xotbLoadingOverlay>
    <div
      class="xotb-box xotb-box_small xotb-theme_shade xotb-text-align_center"
    >
      Loading...
    </div>
  </ng-template>
  <!-- No rows overlay-->
  <ng-template xotbNoRowsOverlay>No data available in table!</ng-template>
</table>


```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    data = [
        { rank: 1, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
        { rank: 2, name: 'Karl', surname: 'Malone', points: 36928 },
        { rank: 3, name: 'Kobe', surname: 'Bryant', points: 33643 },
        { rank: 4, name: 'Michael', surname: 'Jordan', points: 32292 },
        { rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419 }
    ];

    // Initial sort
    sort = { key: 'rank', order: 'asc' };

    // Show loading overlay
    loading = false;

    // Toggle name column
    hideName = false;

    // Custom sort function
    onSort($event) {
        const { key, order } = $event;
        this.data.sort((a: any, b: any) => {
        return (
            (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) *
            (order === 'desc' ? 1 : -1)
        );
        });
    }

    toggleData() {
        this.data = this.data ? null : DATA;
    }

    onRowClick($event) {
        console.log('clicked row', $event.data);
    }

    toggleLoading() {
        this.loading = true;
        setTimeout(() => {
        this.loading = false;
        }, 500);
    }
}

...
```

## API
 
#### <xotb-datatable>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[data]` | Array of data to be displayed as rows in the table | `any[]` |  |
| `[sort]` | Sorting state object | `string` |  |
| `[trackByKey]` | Unique object property of data, useful for internal tracking | `string` |  |
| `[loading]` | Whether loading overlay should be displayed | `boolean` | `false` |
| `(sortChange)` | Requested sort event | `EventEmitter` |  |
| `(rowClick)` | Invoked when a row is clicked passing original Event and row's data, as {event: Event, data: any}. | `EventEmitter` |  |

#### <xotb-datatable-column>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[heading]` | Header text of column. It will also be used as title and as header on small screens even if a custom header template is used | `string` |  |
| `ng-template[xotbDatatableHeading]` | Provide a custom header template | `TemplateRef` |  |
| `[key]` | Property of data to display. If not specified you should provide a custom template | `string` |  |
| `[truncate]` | Adds truncate to every cell of this column | `boolean` | `false` |
| `[sortable]` | Whether it is sortable. key should be always defined for sortable columns | `boolean` |  |
| `[headClass]` | Style class(es) for header cell of this column. Use as ngClass | `string | Array | Object` |  |
| `[cellClass]` | Style class(es) for each cell of of this column. Use as ngClass | `string | Array | Object` |  |
