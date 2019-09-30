import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

import { XotbCarousel } from './carousel';
import { XotbCarouselImage } from './carousel-image';
import { XotbCarouselIndicator } from './carousel-indicator';

const DIRECTIVES = [XotbCarousel, XotbCarouselImage];

@NgModule({
  declarations: [...DIRECTIVES, XotbCarouselIndicator],
  imports: [CommonModule, XotbIconsModule, XotbInternalOutletModule],
  exports: DIRECTIVES
})
export class XotbCarouselModule {}
