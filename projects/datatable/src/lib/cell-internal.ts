import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnChanges
} from '@angular/core';
import { XotbDatatableColumn } from './column';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'td[xotbDatatatableCell_]',
  templateUrl: './cell-internal.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbInternalDatatableCell implements OnChanges {
  @Input() row: any;
  @Input() column: XotbDatatableColumn;
  @Input() index: number;

  @HostBinding('attr.data-label')
  get dataLabel() {
    return this.column.heading;
  }

  context: any;

  ngOnChanges() {
    this.context = {
      $implicit: this.value,
      row: this.row,
      index: this.index
    };
  }

  get value() {
    const { key } = this.column;
    return key ? this.row[key] : null;
  }
}
