import { Component } from '@angular/core';

@Component({
  templateUrl: './speedo-meter.component.html',
  selector: 'speedo-meter'
})
export class DemoSpeedoMeterComponent {
  onSpeedMeter(e) {
    console.log(e);
  }
}
