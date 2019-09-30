import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbFormsModule } from 'ng-xotb/controls/forms';
import { XotbTextarea } from './textarea/textarea';
import { XotbTextareaInput } from './input/input';

@NgModule({
  declarations: [XotbTextarea, XotbTextareaInput],
  imports: [CommonModule, XotbFormsModule],
  exports: [XotbTextarea, XotbTextareaInput]
})
export class XotbTextareaModule {}
