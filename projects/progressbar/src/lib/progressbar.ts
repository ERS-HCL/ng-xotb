import { HostService } from 'ng-xotb/common';

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'xotb-progressbar',
  templateUrl: './progressbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
  styles: []
})
export class XotbProgressbar implements OnInit, OnChanges {
  @Input() set value(value: number) {
    this._value = Math.max(0, Math.min(value, 100)); // Trap on [0, 100]
    this.renderer.setAttribute(
      this.element.nativeElement,
      'aria-valuenow',
      `${this.value}`
    );
  }
  get value() {
    return this._value;
  }

  /**
   * The size of the progress bar.
   */
  @Input() size: 'x-small' | 'small' | 'medium' | 'large';

  /**
   * The variant of the progress bar.
   */
  @Input() variant: 'circular';

  private _value: number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private hostService: HostService
  ) {
    this.renderer.addClass(this.element.nativeElement, 'xotb-progressbar');
    this.renderer.setAttribute(
      this.element.nativeElement,
      'role',
      'progressbar'
    );
    this.renderer.setAttribute(
      this.element.nativeElement,
      'aria-valuemin',
      '0'
    );
    this.renderer.setAttribute(
      this.element.nativeElement,
      'aria-valuemax',
      '100'
    );
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, {
      [`xotb-progressbar_${this.size}`]: !!this.size,
      [`xotb-progressbar_${this.variant}`]: !!this.variant
    });
  }
}
