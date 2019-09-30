import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbSegmentedButton } from './segmented-button';
import { XotbSegmentedButtonOption } from './segmented-button-option';

const DIRECTIVES = [XotbSegmentedButton, XotbSegmentedButtonOption];

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
  imports: [CommonModule]
})
export class XotbSegmentedButtonModule {}
