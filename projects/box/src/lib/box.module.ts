import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbVBox } from './vbox';
import { XotbHBox } from './hbox';
import { XotbCard } from './card';

@NgModule({
  declarations: [XotbVBox, XotbHBox, XotbCard],
  imports: [CommonModule],
  exports: [XotbVBox, XotbHBox, XotbCard]
})
export class XotbBoxModule {}
