import {
  Component,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChildren,
  QueryList,
  OnChanges
} from '@angular/core';
import {
  LEFT_ARROW,
  DOWN_ARROW,
  UP_ARROW,
  RIGHT_ARROW
} from '@angular/cdk/keycodes';
import { trapEvent } from 'ng-xotb/utility';
import { XotbColorpickerSwatchTrigger } from './trigger';

@Component({
  selector: 'xotb-colorpicker-swatches',
  templateUrl: './colorpicker-swatches.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .xotb-color-picker__swatch-selected {
        box-shadow: rgb(117, 112, 112) 1px 1px 1px;
    `
  ]
})
export class XotbColorpickerSwatches implements OnChanges {
  @Input() readonly hex: string;

  @Output() hexChange = new EventEmitter<string>();

  @Input() swatchColors: string[] = [];

  @ViewChildren(XotbColorpickerSwatchTrigger) readonly triggers: QueryList<
    XotbColorpickerSwatchTrigger
  >;

  activeIndex: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(
      this.el.nativeElement,
      'xotb-color-picker__swatches'
    );
  }

  ngOnChanges() {
    this.activeIndex = Math.max(this.swatchColors.indexOf(this.hex), 0);
  }

  @HostListener('keydown', ['$event'])
  onSelectViaInteraction(evt: KeyboardEvent) {
    let direction = 0;
    switch (evt.keyCode) {
      case LEFT_ARROW:
      case UP_ARROW:
        direction = -1;
        break;
      case RIGHT_ARROW:
      case DOWN_ARROW:
        direction = 1;
        break;
      default:
        return;
    }

    trapEvent(evt);

    const activeIndex = this.swatchColors.indexOf(this.hex);

    const index =
      (this.triggers.length + activeIndex + direction) % this.triggers.length;
    const trigger = this.triggers.toArray()[index];
    trigger.focus();
  }

  isSelected(hex: string) {
    return hex === this.hex;
  }

  onSelect(hex: string) {
    this.hexChange.emit(hex);
  }
}
