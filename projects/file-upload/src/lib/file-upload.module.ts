import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { XotbFileUpload } from './file-upload';

import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbIconsModule } from 'ng-xotb/controls/icons';

@NgModule({
  declarations: [XotbFileUpload],
  imports: [CommonModule, XotbIconsModule, XotbInternalOutletModule],
  exports: [XotbFileUpload]
})
export class XotbFileUploadModule {}
