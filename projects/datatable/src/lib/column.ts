import { Directive, Input, ContentChild } from '@angular/core';
import { XotbDatatableCell } from './cell';
import { XotbDatatableHeadingTemplate } from './heading';
import { isRequired, InputBoolean } from 'ng-xotb/utility';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'xotb-datatable-column'
})
export class XotbDatatableColumn {
  @isRequired
  @Input()
  heading: string;

  @Input() key: string;

  @Input() headClass: any;

  @Input() cellClass: any;

  @Input() @InputBoolean() sortable = false;

  @Input() @InputBoolean() truncate = false;

  @ContentChild(XotbDatatableCell, { static: true }) cellTpl: XotbDatatableCell;

  @ContentChild(XotbDatatableHeadingTemplate, { static: true })
  headingTpl: XotbDatatableHeadingTemplate;
}
