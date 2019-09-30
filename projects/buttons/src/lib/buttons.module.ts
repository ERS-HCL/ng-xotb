import { NgModule } from '@angular/core';
import { XotbButton } from './button';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import {
  XotbButtonStateOn,
  XotbButtonStateHover,
  XotbButtonStateOff
} from './button-states';
import { XotbButtonStateful } from './button-stateful';

@NgModule({
  declarations: [
    XotbButton,
    XotbButtonStateOn,
    XotbButtonStateHover,
    XotbButtonStateOff,
    XotbButtonStateful
  ],
  imports: [CommonModule, XotbIconsModule],
  exports: [
    XotbButton,
    XotbButtonStateOn,
    XotbButtonStateHover,
    XotbButtonStateOff,
    XotbButtonStateful
  ]
})
export class XotbButtonsModule {}
