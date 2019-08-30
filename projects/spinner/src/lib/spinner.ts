import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnInit,
  OnChanges
} from '@angular/core';
import { HostService } from 'ng-xotb/common';

@Component({
  selector: 'xotb-spinner',
  templateUrl: './spinner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService]
})
export class XotbSpinner implements OnInit, OnChanges {
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

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private hostService: HostService
  ) {
    this.renderer.addClass(this.element.nativeElement, 'xotb-spinner');
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  private setHostClass() {
    this.hostService.updateClass(this.element, {
      [`xotb-spinner_${this.size || 'medium'}`]: true,
      [`xotb-spinner_${this.variant}`]: !!this.variant
    });
  }
}
