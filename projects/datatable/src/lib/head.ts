import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  TemplateRef
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'th[xotbDatatableHead]',
  templateUrl: './head.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-is-sorted_asc]': `sortOrder === 'asc'`,
    '[class.xotb-is-sorted_desc]': `sortOrder === 'desc'`,
    '[class.xotb-is-sorted]': `!!sortOrder`
  }
})
export class XotbInternalDatatableHeadCell {
  @Input() heading: string;
  @Input() headingTpl: TemplateRef<any>;

  get header() {
    return this.headingTpl || this.heading;
  }

  get attrTitle() {
    return this.heading || null;
  }

  @HostBinding('class.xotb-is-sortable')
  @Input()
  sortable: boolean;

  @Input() sortOrder: 'asc' | 'desc';

  @HostBinding('attr.aria-sort')
  get ariaSort() {
    return this.sortOrder ? `${this.sortOrder}ending` : 'none';
  }

  @Output() sort = new EventEmitter();

  sortChange() {
    this.sort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
  }
}
