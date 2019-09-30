import {
  Component,
  ElementRef,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  LEFT_ARROW,
  DOWN_ARROW,
  UP_ARROW,
  RIGHT_ARROW
} from '@angular/cdk/keycodes';
import { flatMap, map, takeUntil, startWith } from 'rxjs/operators';
import { merge, fromEvent, Subscription } from 'rxjs';
import { trapEvent, uniqueId, getHexFromHsv, IHSV } from 'ng-xotb/utility';

@Component({
  selector: 'xotb-colorpicker-range',
  templateUrl: './colorpicker-range.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbColorpickerRange implements AfterViewInit, OnDestroy {
  @Input() set hsv(hsv: IHSV) {
    if (hsv) {
      this._hsv = hsv;
    }
  }
  get hsv() {
    return this._hsv;
  }

  @Output() hsvChange = new EventEmitter<IHSV>();

  @ViewChild('rangeIndicator', { static: false }) rangeIndicator: ElementRef;
  @ViewChild('rangeIndicatorContainer', { static: false })
  rangeIndicatorContainer: ElementRef;

  uid = uniqueId('colorpicker-range');

  get hex() {
    return getHexFromHsv(this.hsv);
  }

  private _hsv: IHSV = { hue: 0, saturation: 0, value: 0 };

  private dragSubscription: Subscription;

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngAfterViewInit() {
    this.dragSubscription = this.setupDrag().subscribe((mm: any) =>
      this.emitChange(mm)
    );
  }

  hueSliderChange(value: number) {
    this.emitChange({ hue: value });
  }

  rangeIndicatorKeyboard(evt: KeyboardEvent) {
    let saturation = this.hsv.saturation;
    let value = this.hsv.value;

    switch (evt.keyCode) {
      case LEFT_ARROW:
        saturation = this.limit(saturation - 1);
        break;
      case RIGHT_ARROW:
        saturation = this.limit(saturation + 1);
        break;
      case UP_ARROW:
        value = this.limit(value + 1);
        break;
      case DOWN_ARROW:
        value = this.limit(value - 1);
        break;
      default:
        return;
    }

    trapEvent(evt);
    this.emitChange({ saturation, value });
  }

  indicatorStyle() {
    return {
      'bottom.%': this.hsv.value,
      'left.%': this.hsv.saturation,
      background: this.hex
    };
  }

  ngOnDestroy() {
    if (this.dragSubscription) {
      this.dragSubscription.unsubscribe();
      this.dragSubscription = null;
    }
  }

  private emitChange(hsv: Partial<IHSV>) {
    this.hsvChange.emit({ ...this.hsv, ...hsv });
  }

  private limit(value): number {
    return Math.min(Math.max(value, 0), 100);
  }

  private setupDrag() {
    const dragTarget = this.rangeIndicatorContainer.nativeElement;

    const pressEnd = merge(
      fromEvent(this.document, 'mouseup'),
      fromEvent(this.document, 'touchend')
    );

    const pressMove = merge(
      fromEvent(this.document, 'mousemove'),
      fromEvent(this.document, 'touchmove')
    );

    const pressStart = merge(
      fromEvent(dragTarget, 'mousedown'),
      fromEvent(dragTarget, 'touchstart')
    );

    return pressStart.pipe(
      flatMap(md => {
        this.rangeIndicator.nativeElement.focus();
        const rect = dragTarget.getBoundingClientRect();

        return pressMove.pipe(
          startWith(md),
          map((mm: any) => {
            mm.preventDefault();

            const saturation = Math.round(
              ((mm.clientX - rect.left) / rect.width) * 100
            );
            const value = Math.round(
              ((rect.bottom - mm.clientY) / rect.height) * 100
            );
            return {
              saturation: this.limit(saturation),
              value: this.limit(value)
            };
          }),
          takeUntil(pressEnd)
        );
      })
    );
  }
}
