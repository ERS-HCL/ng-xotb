import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  ContentChildren,
  QueryList
} from '@angular/core';
import { XotbAccordionSection } from './accordion-section';

import {
  InputBoolean,
  isOptionSelected,
  addOptionToSelection
} from 'ng-xotb/utility';

@Component({
  selector: 'xotb-accordion,[xotb-accordion]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion.html'
})
export class XotbAccordion {
  /**
   * Defines the expanded section(s).
   */
  @Input() activeName: string | string[];

  @Output() activeNameChange = new EventEmitter<string | string[]>();

  /**
   * Whether we allow multiple sections open at a time.
   */
  @Input() @InputBoolean() multiple = false;

  @ContentChildren(XotbAccordionSection) sections: QueryList<
    XotbAccordionSection
  >;

  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'xotb-accordion');
  }

  toggle(section: XotbAccordionSection) {
    const active = addOptionToSelection(
      section.name,
      this.activeName,
      this.multiple
    );
    this.activeNameChange.emit(active);
  }

  isActive(section: XotbAccordionSection): boolean {
    return isOptionSelected(section.name, this.activeName, this.multiple);
  }
}
