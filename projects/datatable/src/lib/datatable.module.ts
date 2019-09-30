import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';

import { XotbDatatable } from './datatable';
import { XotbDatatableColumn } from './column';
import { XotbDatatableCell } from './cell';
import { XotbDatatableHeadingTemplate } from './heading';
import {
  XotbDatatableLoadingOverlay,
  XotbDatatableNoRowsOverlay
} from './overlays';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

import { XotbInternalDatatableHeadCell } from './head';
import { XotbInternalDatatableCell } from './cell-internal';

const DATATABLE_DIRECTIVES = [
  XotbDatatable,
  XotbDatatableColumn,
  XotbDatatableCell,
  XotbDatatableHeadingTemplate,
  XotbDatatableLoadingOverlay,
  XotbDatatableNoRowsOverlay
];

@NgModule({
  declarations: [
    DATATABLE_DIRECTIVES,
    XotbInternalDatatableHeadCell,
    XotbInternalDatatableCell
  ],
  exports: [DATATABLE_DIRECTIVES],
  imports: [CommonModule, XotbIconsModule, XotbInternalOutletModule]
})
export class XotbDatatableModule {}
