import { NgModule } from '@angular/core';
import { XotbAccordion } from './accordion';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbAccordionItem } from './accordion-item';
import { XotbAccordionSection } from './accordion-section';

@NgModule({
  declarations: [XotbAccordion, XotbAccordionItem, XotbAccordionSection],
  imports: [CommonModule, XotbIconsModule, XotbInternalOutletModule],
  exports: [XotbAccordion, XotbAccordionSection]
})
export class XotbAccordionModule {}
