import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToneComponent } from './components/tone/tone.component';

@NgModule({
  declarations: [
    ToneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToneComponent],
})
export class ContentModule { }
