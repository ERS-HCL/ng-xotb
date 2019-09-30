import { NgModule } from '@angular/core';
import { SpeedoMeterComponent } from './speedo-meter.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpeedoMeterComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [SpeedoMeterComponent]
})
export class XotbSpeedoMeterModule {}
