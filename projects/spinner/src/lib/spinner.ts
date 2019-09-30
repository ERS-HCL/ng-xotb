import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'xotb-spinner',
  templateUrl: './spinner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./spinner.scss']
})
export class XotbSpinner {
  /**
   * The size of the spinner.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';

  /**
   * The variant changes the appearance of the spinner.
   */
  @Input() variant: 'brand' | 'inverse';

  /**
   * The alternative text used to describe the reason for the wait and need for a spinner.
   */
  @Input() alternativeText: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
  }

  spinnerClass() {
    return {
      [`xotb-spinner_${this.size || 'medium'}`]: true,
      [`xotb-spinner_${this.variant}`]: !!this.variant
    };
  }
}
