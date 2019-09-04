import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

import { XotbMenus } from './menus';
import { XotbDropdownTrigger } from './dropdown-trigger';
import { XotbDropdownItem } from './dropdown-item';

const XOTB_DROPDOWN_DIRECTIVES = [
  XotbMenus,
  XotbDropdownTrigger,
  XotbDropdownItem
];

@NgModule({
  declarations: [XOTB_DROPDOWN_DIRECTIVES],
  imports: [CommonModule, XotbThemeModule],
  exports: [XOTB_DROPDOWN_DIRECTIVES]
})
export class XotbMenusModule {}
