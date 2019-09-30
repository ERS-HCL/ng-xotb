import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  ElementRef,
  Renderer2,
  HostListener,
  ChangeDetectorRef,
  Inject,
  forwardRef,
  NgZone
} from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
import {
  uniqueId,
  trapEvent,
  menuItemScroll,
  InputBoolean
} from 'ng-xotb/utility';
import { XotbCombobox } from './combobox';

@Component({
  selector: 'xotb-combobox-option, [xotbComboboxOption]',
  templateUrl: './combobox-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbComboboxOption implements Highlightable, OnDestroy {
  @Input() value: any;

  @Input() label: string;

  @Input() @InputBoolean() selected: boolean;

  @Input() disabled = false;

  uid = uniqueId('combo-option');

  // Whether or not the option is currently active and ready to be selected
  set active(active: boolean) {
    if (this.active === active || this.destroyed) {
      return;
    }

    this._active = active;
    this.cd.detectChanges();

    if (active) {
      this.combobox.inputEl.setAriaActiveDescendant(this.uid);
      this.scrollIntoView();
    } else {
      clearTimeout(this.scrollTimer);
    }
  }
  get active() {
    return this._active;
  }

  private _active = false;

  private scrollTimer: any;

  // Flag to disable scrolling into view when option is activated using mouse
  private disableNextScrollIntoView = false;

  private destroyed = false;

  constructor(
    private element: ElementRef,
    @Inject(forwardRef(() => XotbCombobox)) private combobox: XotbCombobox,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone,
    renderer: Renderer2
  ) {
    renderer.addClass(element.nativeElement, 'xotb-listbox__item');
    renderer.setAttribute(element.nativeElement, 'role', 'presentation');
  }

  @HostListener('mousedown', ['$event'])
  onSelectViaInteraction(evt: MouseEvent) {
    trapEvent(evt);
    if (!this.disabled) {
      this.combobox.onOptionSelection(this);
    }
  }

  @HostListener('mouseenter')
  hover() {
    if (!this.disabled) {
      this.disableNextScrollIntoView = true;
      this.combobox.keyManager.setActiveItem(this);
    }
  }

  setActiveStyles(): void {
    this.active = true;
  }

  setInactiveStyles(): void {
    this.active = false;
  }

  scrollIntoView() {
    if (this.disableNextScrollIntoView) {
      this.disableNextScrollIntoView = false;
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.scrollTimer = setTimeout(() => {
        const li: HTMLElement = this.element.nativeElement;
        menuItemScroll(li.parentElement.parentElement, li);
      }, 0);
    });
  }

  ngOnDestroy() {
    this.destroyed = true;
    clearTimeout(this.scrollTimer);
  }
}
