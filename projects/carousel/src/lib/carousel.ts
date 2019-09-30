import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter,
  OnChanges,
  ViewChildren,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Optional,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { InputBoolean, InputNumber, isRequired } from 'ng-xotb/utility';
import { XotbCarouselImage } from './carousel-image';
import { XotbCarouselIndicator } from './carousel-indicator';

@Component({
  selector: 'xotb-carousel',
  templateUrl: './carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-carousel]': 'true'
  }
})
export class XotbCarousel implements OnChanges {
  @isRequired
  @Input()
  @InputNumber()
  readonly active;

  @Output() activeChange = new EventEmitter<number>();

  /**
   * The auto scroll duration in seconds. After that the next image is displayed.
   */
  @Input() @InputNumber() scrollDuration = 5;

  /**
   * Whether auto scroll is enabled.
   */
  @Input() @InputBoolean() autoScroll = true;

  /**
   * Whether the carousel should continue looping from the beginning after the last item is displayed.
   */
  @Input() @InputBoolean() autoRefresh = true;

  @ContentChildren(XotbCarouselImage) images: QueryList<XotbCarouselImage>;

  @ViewChildren(XotbCarouselIndicator) indicators: QueryList<
    XotbCarouselIndicator
  >;

  @ViewChild('indicatorsEl', { static: true }) indicatorsEl: ElementRef<
    HTMLElement
  >;

  @Input() readonly labels = {
    startAutoPlay: 'Start auto-play',
    stopAutoPlay: 'Stop auto-play'
  };

  playing = true;

  private nextTimer = null;

  constructor(@Optional() @Inject(DOCUMENT) private document: any) {}

  isActive(index: number) {
    return index === this.active;
  }

  getImage(index: number) {
    return this.images.toArray()[index];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.active) {
      if (
        this.document &&
        this.indicatorsEl.nativeElement.contains(document.activeElement)
      ) {
        this.indicators.toArray()[this.active].focus();
      }
    }
    if (changes.active || changes.autoScroll || changes.scrollDuration) {
      this.setTimer();
    }
  }

  onIndicatorClick(index: number) {
    this.setActive(index, true);
  }

  onKeyboard(evt: KeyboardEvent) {
    if (evt.keyCode === LEFT_ARROW || evt.keyCode === RIGHT_ARROW) {
      this.activateNext(evt.keyCode === LEFT_ARROW);
    }
  }

  setActive(index: number, stopPlaying = false) {
    if (stopPlaying) {
      this.playing = false;
    }

    if (this.active !== index) {
      this.activeChange.emit(index);
    }
  }

  togglePlay() {
    this.playing = !this.playing;
    this.setTimer();
  }

  playLabel() {
    return this.labels[this.playing ? 'stopAutoPlay' : 'startAutoPlay'];
  }

  private activateNext(reverse = false): void {
    const active = this.active + (reverse ? -1 : 1);

    if ((active < 0 || active > this.images.length - 1) && !this.autoRefresh) {
      return;
    }

    this.setActive((this.images.length + active) % this.images.length);
  }

  private setTimer() {
    clearTimeout(this.nextTimer);

    if (this.autoScroll && this.playing) {
      this.nextTimer = setTimeout(() => {
        this.activateNext();
      }, this.scrollDuration * 1000);
    }
  }
}
