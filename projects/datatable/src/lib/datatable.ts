import {
  Component,
  Input,
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  QueryList,
  HostBinding,
  Output,
  EventEmitter,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { XotbDatatableColumn } from './column';
import {
  XotbDatatableLoadingOverlay,
  XotbDatatableNoRowsOverlay
} from './overlays';

export interface IXotbDatatableSort {
  key: string;
  order: 'asc' | 'desc';
}

export interface IXotbDatatableRowClick {
  event: Event;
  data: any;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'table[xotb-datatable]',
  templateUrl: './datatable.html',
  host: {
    '[class.xotb-table]': 'true'
  },
  styles: [
    `
      .xotb-datatable-loading {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.5);
      }
    `
  ]
})
export class XotbDatatable implements AfterContentInit, OnDestroy {
  @Input() data: any[] = [];
  @Input() trackByKey: string;

  @Input() sort: IXotbDatatableSort;
  @Output() sortChange = new EventEmitter<IXotbDatatableSort>();

  @HostBinding('class.xotb-is-relative')
  @Input()
  loading = false;

  @ContentChild(XotbDatatableLoadingOverlay, { static: true })
  loadingOverlay: XotbDatatableLoadingOverlay;

  get showLoading() {
    return this.loading && this.loadingOverlay;
  }

  @ContentChild(XotbDatatableNoRowsOverlay, { static: true })
  noRowsOverlay: XotbDatatableNoRowsOverlay;

  @ContentChildren(XotbDatatableColumn) columns: QueryList<XotbDatatableColumn>;

  @Output() rowClick = new EventEmitter<IXotbDatatableRowClick>();

  private _columnsSubscription: Subscription;

  constructor(private detector: ChangeDetectorRef) {}

  columnTrackBy(index: number, column: XotbDatatableColumn) {
    return column.key || index;
  }

  dataTrackBy = (index: number, data: any) => {
    return this.trackByKey ? data[this.trackByKey] : index;
  };

  onColumnSort(column: XotbDatatableColumn, order: 'asc' | 'desc') {
    const key = column.key;
    if (!key) {
      throw new Error(
        `xotb-components: No "key" property is set for sortable column "${column.heading}"`
      );
    }
    this.sortChange.emit({ key, order });
  }

  getColumnSortOrder(column: XotbDatatableColumn) {
    return this.sort && column.key === this.sort.key ? this.sort.order : null;
  }

  onRowClick(event: Event, data: any) {
    this.rowClick.emit({ event, data });
  }

  ngAfterContentInit() {
    this._columnsSubscription = this.columns.changes.subscribe(() =>
      this.detector.markForCheck()
    );
  }

  ngOnDestroy() {
    if (this._columnsSubscription) {
      this._columnsSubscription.unsubscribe();
      this._columnsSubscription = null;
    }
  }
}
