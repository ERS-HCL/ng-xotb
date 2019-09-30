import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[xotbColorpickerSwatch]',
  templateUrl: './colorpicker-swatch.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbColorpickerSwatch {
  @HostBinding('style.background')
  @Input()
  color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'xotb-swatch');
  }
}
