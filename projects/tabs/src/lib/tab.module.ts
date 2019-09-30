import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbTabs } from './tabs';
import { XotbTab } from './tab';
import { XotbTabVerbose, XotbTabContent, XotbTabLabel } from './tab-verbose';
import { XotbInternalOutletModule } from 'ng-xotb/utility';

const XOTB_TAB_DIRECTIVES = [
  XotbTabs,
  XotbTab,
  XotbTabVerbose,
  XotbTabContent,
  XotbTabLabel
];

@NgModule({
  declarations: [XOTB_TAB_DIRECTIVES],
  exports: [XOTB_TAB_DIRECTIVES],
  imports: [CommonModule, XotbInternalOutletModule]
})
export class XotbTabsModule {}
