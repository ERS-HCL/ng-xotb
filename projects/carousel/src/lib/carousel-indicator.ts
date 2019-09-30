import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { InputBoolean, uniqueId } from 'ng-xotb/utility';
import { XotbCarouselImage } from './carousel-image';

@Directive({
  selector: '[xotbCarouselIndicator]'
})
export class XotbCarouselIndicator implements OnChanges {
  @HostBinding('class.xotb-is-active')
  @HostBinding('attr.aria-selected')
  @Input()
  @InputBoolean()
  readonly isActive;

  @HostBinding('attr.tabindex')
  get tabindex() {
    return this.isActive ? 0 : -1;
  }

  @Input() readonly image: XotbCarouselImage;

  @HostBinding('attr.id')
  uid = uniqueId('carousel-indicator');

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.image.active = this.isActive;

    if (changes.image) {
      this.image.labelledby = this.uid;
    }
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
