import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { _isNumberValue } from '@angular/cdk/coercion';
import { getHexFromRgb, getRgbFromHex, isValidHex } from 'ng-xotb/utility';
import { uniqueId } from 'ng-xotb/utility';

@Component({
  selector: 'xotb-colorpicker-inputs',
  templateUrl: './colorpicker-inputs.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbColorpickerInputs {
  @Input() set hex(hex: string) {
    if (hex) {
      this._hex = hex;
      const { red, green, blue } = getRgbFromHex(this.hex);
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
  }
  get hex() {
    return this._hex;
  }

  @Output() hexChange = new EventEmitter<string>();

  red = 0;

  green = 0;

  blue = 0;

  uid = uniqueId('colorpicker-inputs');

  private _hex: string;

  updateHex(value) {
    const isValid = isValidHex(value);
    if (!isValid) {
      this.red = this.green = this.blue = null;
    }
    this.hexChange.emit(isValid ? value : null);
  }

  onRGB(key: string, value: number) {
    this[key] = value;

    const hex = this.isRGBValid()
      ? getHexFromRgb({ red: this.red, green: this.green, blue: this.blue })
      : null;
    this.hexChange.emit(hex);
  }

  get isHexInvalid() {
    return this.red === null && this.green === null && this.blue === null;
  }

  isColorNumberValid(key: string) {
    const value = this[key];
    return _isNumberValue(value) && value >= 0 && value <= 255;
  }

  isRGBValid() {
    return ['red', 'green', 'blue'].every(prop =>
      this.isColorNumberValid(prop)
    );
  }
}
