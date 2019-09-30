import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ViewChild,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'xotb-speedo-meter',
  templateUrl: './speedo-meter.component.html',
  styleUrls: ['./speedo-meter.component.css']
})
export class SpeedoMeterComponent implements OnInit {
  public speedScore: number = 0; //min : 0; max: 100
  public readingSpeed: number;
  public niddleSpeed: number;

  @ViewChild('xotbSpeedometer', { static: true }) xotbSpeedometer: ElementRef;

  @ViewChild('xotbSpeedometerWheelColor', { static: true })
  xotbSpeedometerWheelColor: ElementRef;

  @ViewChild('xotbSpeedometerWheelColorDiv', { static: true })
  xotbSpeedometerWheelColorDiv: ElementRef;
  styleClass = '.class1{}';
  pseudoStyle = '.xOTB-speedometerCentreCircle:after{background: red;}';

  @Input() title: String;
  @Input() labelText: String;

  @Input() set speedoMeterColor(color: string) {
    this.renderer.setStyle(
      this.xotbSpeedometer.nativeElement,
      'border-top-color',
      'transparent'
    );
    this.renderer.setStyle(
      this.xotbSpeedometer.nativeElement,
      'border-right-colorr',
      'transparent'
    );
    this.renderer.setStyle(
      this.xotbSpeedometer.nativeElement,
      'border-bottom-color',
      color
    );
    this.renderer.setStyle(
      this.xotbSpeedometer.nativeElement,
      'border-left-color',
      color
    );
  }

  @Input() set wheelColor(color: string) {
    this.renderer.setStyle(
      this.xotbSpeedometerWheelColor.nativeElement,
      'border-bottom-width',
      '110px'
    );
    this.renderer.setStyle(
      this.xotbSpeedometerWheelColor.nativeElement,
      'border-bottom-style',
      'solid'
    );
    this.renderer.setStyle(
      this.xotbSpeedometerWheelColor.nativeElement,
      'border-bottom-color',
      color
    );
    const classStyle = this.renderer.createText(this.styleClass);
    const pseudoElementStyle = this.renderer.createText(this.pseudoStyle);

    // Insert the previously defined style into a new <style> element
    const newStyleElement = this.renderer.createElement('style');
    // this.renderer.appendChild(newStyleElement, classStyle);
    this.renderer.appendChild(newStyleElement, pseudoElementStyle);
    this.renderer.appendChild(
      this.xotbSpeedometerWheelColorDiv.nativeElement,
      newStyleElement
    );
  }

  @Input() max: number = 100;

  @Output() selectedValue = new EventEmitter<number>();

  onTextInputChaange(value) {
    this.selectedValue.emit(value);
  }

  constructor(private renderer: Renderer2) {}

  updateSpeed() {
    this.readingSpeed = Math.round((this.speedScore * 180) / this.max) - 45;
    this.niddleSpeed = Math.round((this.speedScore * 180) / this.max) - 90;
  }

  getSpeed(speed) {
    this.speedScore = speed;
    this.updateSpeed();
  }

  ngOnChanges() {}

  ngOnInit() {
    this.title = this.title || 'Speedometer';
    this.labelText = this.labelText || 'Enter Value';
  }
}
