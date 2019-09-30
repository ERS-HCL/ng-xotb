import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Inject,
  forwardRef,
  HostBinding
} from '@angular/core';
import { uniqueId, trapEvent } from 'ng-xotb/utility';
import { XotbCombobox } from './combobox';
import { DOWN_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { Observable, fromEvent } from 'rxjs';
import { buffer, debounceTime, map } from 'rxjs/operators';

const MAX_INTERVAL_BETWEEN_KEYSTROKES = 300; // ms

@Directive({
  selector: 'input[xotbCombobox]'
})
export class XotbComboboxInput {
  keyboardBuffer$: Observable<string>;

  @HostBinding('readOnly')
  get isReadonly() {
    return (
      this.combobox.variant === 'base' || this.combobox.hasLookupSingleSelection
    );
  }

  @HostBinding('attr.aria-autocomplete')
  get ariaAutocomplete() {
    return this.combobox.isLookup ? 'list' : null;
  }

  @HostBinding('class.xotb-combobox__input-value')
  get hasReadonlyValue() {
    return this.combobox.hasLookupSingleSelection;
  }

  get id() {
    return this.el.nativeElement.id;
  }

  constructor(
    @Inject(forwardRef(() => XotbCombobox)) private combobox: XotbCombobox,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    const { nativeElement } = this.el;
    this.renderer.addClass(nativeElement, 'xotb-input');
    this.renderer.addClass(nativeElement, 'xotb-combobox__input');
    this.renderer.setAttribute(nativeElement, 'autoComplete', 'off');
    this.renderer.setAttribute(nativeElement, 'role', 'textbox');
    this.renderer.setAttribute(
      nativeElement,
      'aria-controls',
      this.combobox.uid
    );
    if (!nativeElement.id) {
      this.renderer.setAttribute(
        nativeElement,
        'id',
        uniqueId('combobox-input')
      );
    }

    const keyboardEvent$ = fromEvent(nativeElement, 'keypress').pipe(
      map((e: KeyboardEvent) => e.keyCode)
    );
    this.keyboardBuffer$ = keyboardEvent$.pipe(
      buffer(
        keyboardEvent$.pipe(debounceTime(MAX_INTERVAL_BETWEEN_KEYSTROKES))
      ),
      map((keyCodes: number[]) =>
        keyCodes.map(c => String.fromCharCode(c)).join('')
      )
    );
  }

  setAriaActiveDescendant(uid: string | null) {
    if (uid) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'aria-activedescendant',
        uid
      );
    } else {
      this.renderer.removeAttribute(
        this.el.nativeElement,
        'aria-activedescendant'
      );
    }
  }

  setValue(value: any): void {
    this.renderer.setProperty(
      this.el.nativeElement,
      'value',
      value !== null ? value : ''
    );
  }

  focus() {
    this.el.nativeElement.focus();
  }

  @HostListener('click')
  onMouseInteraction() {
    if (
      this.combobox.hasLookupSingleSelection ||
      (this.combobox.open && this.combobox.isLookup)
    ) {
      return;
    }
    this.combobox.openChange.emit(!this.combobox.open);
  }

  @HostListener('blur')
  onBlur() {
    this.combobox.openChange.emit(false);
  }

  @HostListener('keydown', ['$event'])
  onKeyboard(evt: KeyboardEvent) {
    const keyCode = evt.keyCode;

    if (keyCode === ESCAPE) {
      // This is handled by CDK, and detaches overlay
      return;
    }

    if (this.combobox.open) {
      switch (keyCode) {
        // User selects currently active option by pressing the `Enter` key
        case ENTER:
          trapEvent(evt);
          this.combobox.onOptionSelection();
          return;

        // Propagate to keymanager
        default:
          this.combobox.keyManager.onKeydown(evt);
          return;
      }
    } else {
      // Do nothing if readonly Lookup
      if (this.combobox.hasLookupSingleSelection) {
        return;
      }

      // Pressing the `Down` or `Enter` key will expand the collapsed menu
      if (keyCode === DOWN_ARROW || keyCode === ENTER) {
        trapEvent(evt);
        this.combobox.openChange.emit(true);
        return;
      }

      // Any key on Lookup should expand the collapsed menu
      if (this.combobox.isLookup) {
        // Delay emission so actual value of the input has been updated
        setTimeout(() => this.combobox.openChange.emit(true), 0);
      }
    }
  }
}
