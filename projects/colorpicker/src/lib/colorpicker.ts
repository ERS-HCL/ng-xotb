import {
  Component,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
  Input,
  TemplateRef,
  Optional,
  Inject
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import {
  uniqueId,
  InputBoolean,
  getHsvFromHex,
  isValidHex,
  IHSV,
  getHexFromHsv
} from 'ng-xotb/utility';

import { XOTB_COLORPICKER_CONFIG, XotbColorpickerConfig } from './config';

const XOTB_COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XotbColorpicker),
  multi: true
};

@Component({
  selector: 'xotb-colorpicker',
  templateUrl: './colorpicker.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [XOTB_COLORPICKER_VALUE_ACCESSOR],
  styles: []
})
export class XotbColorpicker implements ControlValueAccessor {
  @Input() label = 'Choose Color';

  /**
   * Placeholder of input box.
   */
  @Input() placeholder = '';

  /**
   * Text for cancel button on popover.
   */
  @Input() cancelButtonLabel = 'Cancel';

  /**
   * Text for submit button of popover.
   */
  @Input() submitButtonLabel = 'Done';

  /**
   * Highlights the input as a required field (does not perform any validation).
   */
  @Input() @InputBoolean() required = false;

  /**
   * A tooltip that is displayed next to the label.
   */
  @Input() fieldLevelHelpTooltip: string | TemplateRef<any>;

  /**
   * Error message when hex color input is invalid.
   */
  @Input() invalidColorLabel: string | TemplateRef<any> =
    'Please ensure value is correct';

  /**
   * Text for swatch tab of popover.
   */
  @Input() swatchTabLabel = 'Default';

  /**
   * Text for custom tab of popover.
   */
  @Input() customTabLabel = 'Custom';

  /**
   * Hex color values which are used to set the options of the swatch tab of the colorpicker popover.
   */
  @Input() swatchColors: string[];

  /**
   * Whether to make the hex color input readonly.
   */
  @Input() @InputBoolean() readonlyInput = false;

  /**
   * Determines which tab is visible when popover opens.
   */
  @Input() defaultSelectedTab: 'swatches' | 'custom' = 'swatches';

  /**
   * Configures to show both or which one of the color selection interfaces.
   */
  @Input() variant: 'base' | 'swatches' | 'custom';

  color: string;

  uid = uniqueId('colorpicker');

  open: boolean;

  disabled: boolean;

  hexCurrent = '#FFF';
  hsvCurrent = getHsvFromHex(this.hexCurrent);

  constructor(
    @Optional()
    @Inject(XOTB_COLORPICKER_CONFIG)
    defaultConfig: XotbColorpickerConfig,
    private el: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {
    this.renderer.addClass(this.el.nativeElement, 'xotb-color-picker');

    const config = { ...new XotbColorpickerConfig(), ...defaultConfig };
    this.swatchColors = config.swatchColors;
    this.variant = config.variant;
  }

  onChange = (_: any) => {};

  onTouched = () => {};

  writeValue(value: string) {
    this.color = value || '';
    if (isValidHex(value)) {
      this.hexCurrent = value;
      this.hsvCurrent = getHsvFromHex(value);
    }

    this.cd.detectChanges();
  }

  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onSwatchSelection(hex: string) {
    this.hsvCurrent = getHsvFromHex(hex);
    this.hexCurrent = hex;
  }

  onCustomSelection(hsv: IHSV) {
    this.hsvCurrent = hsv;
    this.hexCurrent = getHexFromHsv(hsv);
  }

  openChange(open: boolean) {
    this.open = open;
  }

  cancel() {
    this.open = false;
  }

  done() {
    this.open = false;
    if (this.hexCurrent !== this.color) {
      this.color = this.hexCurrent;
      this.onChange(this.color);
    }
  }

  canApply() {
    return isValidHex(this.hexCurrent);
  }

  onInput(hex: string) {
    this.color = hex;

    if (isValidHex(hex)) {
      this.onSwatchSelection(hex);
      this.onChange(hex);
    } else {
      this.onChange(null);
    }
  }

  get isValidInput() {
    return !this.color || isValidHex(this.color);
  }
}
