import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { XotbAccordionSection } from './accordion-section';
import { uniqueId } from 'ng-xotb/utility';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'li[xotbAccordionItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion-item.html'
})
export class XotbAccordionItem {
  @Input() isActive: boolean;

  @Input() section: XotbAccordionSection;

  @Output() toggle = new EventEmitter();

  uid = uniqueId('accordion-item');

  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'xotb-accordion__list-item');
  }

  onToggle() {
    this.toggle.emit();
  }
}
