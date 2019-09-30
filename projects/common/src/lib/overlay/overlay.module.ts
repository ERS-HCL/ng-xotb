import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbOverlayxotbOverlayScrolledOutsideViewDirective } from './overlay-outside';

@NgModule({
  declarations: [XotbOverlayxotbOverlayScrolledOutsideViewDirective],
  exports: [XotbOverlayxotbOverlayScrolledOutsideViewDirective],
  imports: [CommonModule]
})
export class XotbOverlayModule {}
