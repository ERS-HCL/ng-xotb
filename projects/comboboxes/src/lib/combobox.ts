import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  TemplateRef,
  OnDestroy,
  ViewChildren,
  QueryList,
  SimpleChanges,
  ContentChild,
  ViewChild,
  NgZone,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  ConnectionPositionPair,
  CdkOverlayOrigin,
  CdkConnectedOverlay
} from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  DEFAULT_DROPDOWN_POSITIONS,
  uniqueId,
  isOptionSelected,
  addOptionToSelection,
  InputBoolean,
  InputNumber
} from 'ng-xotb/utility';

import { XotbComboboxOption } from './combobox-option';
import { XotbComboboxInput } from './combobox-input';

export interface XotbComboboxOptionItem {
  value: number | string;
  label?: string;
  disabled?: boolean;
}

@Component({
  selector: 'xotb-combobox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './combobox.html',
  host: {
    'class.xotb-form-element': 'true'
  }
})
export class XotbCombobox implements OnChanges, OnDestroy {
  @Input() readonly variant: 'base' | 'lookup' = 'base';

  @Input() readonly label: string | TemplateRef<any>;

  uid = uniqueId('combobox');

  @Input() @InputBoolean() readonly open = false;

  @Output() openChange = new EventEmitter<boolean>();

  @Input() readonly selection: any;

  @Output() selectionChange = new EventEmitter();

  @Input() @InputBoolean() readonly multiple = false;

  @Input() @InputNumber() readonly visibleLength: 5 | 7 | 10 = 5;

  @ContentChild(XotbComboboxInput, { static: true }) inputEl: XotbComboboxInput;

  @Input() @InputBoolean() readonly loading: boolean;

  @Input() @InputBoolean() readonly loadingMore: boolean;

  @Input() @InputBoolean() readonly closeOnSelection = true;

  @ViewChildren(XotbComboboxOption) readonly options: QueryList<
    XotbComboboxOption
  >;

  @Input('options') set data(data: any[]) {
    this._data = (data || []).map(d => {
      if (typeof d === 'string') {
        // Support array of strings as options, by mapping to XotbComboboxOptionItem
        return { value: d, label: d };
      } else if (!d.label) {
        // Use `value` if missing `label`
        return { ...d, label: d.value };
      }
      return d;
    });
  }
  get data() {
    return this._data;
  }

  @ViewChild('overlayOrigin', { static: true }) overlayOrigin: CdkOverlayOrigin;

  @ViewChild('cdkOverlay', { static: true }) cdkOverlay: CdkConnectedOverlay;

  @ViewChild('dropdown', { static: true }) dropdownElementRef: ElementRef;

  overlayWidth = 0;

  overlayPositions: ConnectionPositionPair[] = [
    ...DEFAULT_DROPDOWN_POSITIONS['left']
  ];

  /** Manages active item in option list based on key events. */
  keyManager: ActiveDescendantKeyManager<XotbComboboxOption>;

  private optionChangesSubscription: Subscription;

  private _data: XotbComboboxOptionItem[] | null;

  private keyboardSubscription: Subscription;

  @Input() selectionValueFn = (selection: string[]): string => {
    if (selection.length > 0) {
      if (this.multiple && this.isLookup) {
        return '';
      }
      return selection.length === 1
        ? selection[0]
        : `${selection.length} options selected`;
    }
    return '';
  };

  get activeOption(): XotbComboboxOption | null {
    return this.keyManager ? this.keyManager.activeItem : null;
  }

  get selectedOptions(): XotbComboboxOptionItem[] {
    return this.data ? this.data.filter(d => this.isSelected(d.value)) : [];
  }

  get isLookup(): boolean {
    return this.variant === 'lookup';
  }

  get hasLookupSingleSelection() {
    return this.isLookup && !this.multiple && this.selectedOptions.length > 0;
  }

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selection) {
      this.calculateDisplayValue();
    }
  }

  onAttach() {
    // Same width as the trigger element
    this.overlayWidth = this.overlayOrigin.elementRef.nativeElement.offsetWidth;
    this.cd.detectChanges();

    this.keyManager = new ActiveDescendantKeyManager(this.options).withWrap();

    // Activate selected item or first option
    const selectedOption = this.options.find(o => o.selected);
    if (selectedOption) {
      this.keyManager.setActiveItem(selectedOption);
    } else {
      this.keyManager.setFirstItemActive();
    }

    // Listen to button presses if picklist to activate matching option
    this.keyboardSubscribe(this.variant === 'base');

    // When it is open we listen for option changes in order to fix active option and handle scroll
    this.optionChangesSubscription = this.options.changes.subscribe(() => {
      if (
        !this.activeOption ||
        this.options.toArray().indexOf(this.activeOption) === -1
      ) {
        // Activate first option if active one is destroyed
        this.keyManager.setFirstItemActive();
      } else {
        this.activeOption.scrollIntoView();
      }

      // this.updateMenuHeight();
    });

    // this.updateMenuHeight();
  }

  onDetach() {
    if (this.open) {
      this.close();
      return;
    }

    // Clear aria-activedescendant when menu is closed
    this.inputEl.setAriaActiveDescendant(null);

    this.detach();
  }

  trackByOption(index, option: XotbComboboxOption) {
    return option.value;
  }

  dropdownClass() {
    return {
      [`xotb-dropdown_length-${this.visibleLength}`]: this.visibleLength > 0
    };
  }

  inputIconRight() {
    return this.isLookup ? 'search' : 'chevron-down';
  }

  hasNoMatches() {
    return this.isLookup && this.data.length === 0 && !this.loadingMore;
  }

  onOptionSelection(option: XotbComboboxOption = this.activeOption) {
    const selection = addOptionToSelection(
      option.value,
      this.selection,
      this.multiple
    );
    this.selectionChange.emit(selection);
    if (this.closeOnSelection) {
      this.close();
    }
  }

  // Trigger by clear button on Lookup
  onClearSelection() {
    this.selectionChange.emit(null);
    setTimeout(() => this.inputEl.focus(), 0);
  }

  /**
   * Check whether value is currently selected.
   *
   * @param value The value in test, whether is (part of) selection or not
   */
  isSelected(value: any): boolean {
    return isOptionSelected(value, this.selection, this.multiple);
  }

  ngOnDestroy() {
    this.detach();
  }

  close() {
    this.openChange.emit(false);
  }

  private detach() {
    this.keyboardSubscribe(false);
    this.keyManager = null;
    if (this.optionChangesSubscription) {
      this.optionChangesSubscription.unsubscribe();
      this.optionChangesSubscription = null;
    }
  }

  private calculateDisplayValue() {
    const value = this.selectionValueFn(
      this.selectedOptions.map(option => option.label)
    );
    this.inputEl.setValue(value);
  }

  private keyboardSubscribe(listen: boolean) {
    if (this.keyboardSubscription) {
      this.keyboardSubscription.unsubscribe();
      this.keyboardSubscription = null;
    }

    if (listen) {
      this.keyboardSubscription = this.inputEl.keyboardBuffer$.subscribe(
        pattern => {
          pattern = pattern.toLocaleLowerCase();

          const options = this.options.toArray();

          const activeIndex = this.activeOption
            ? this.keyManager.activeItemIndex + 1
            : 0;
          for (let i = 0, n = options.length; i < n; i++) {
            const index = (activeIndex + i) % n;
            const option = options[index];
            if (
              !option.disabled &&
              option.label.toLocaleLowerCase().substr(0, pattern.length) ===
                pattern
            ) {
              this.keyManager.setActiveItem(option);
              break;
            }
          }
        }
      );
    }
  }

  private updateMenuHeight() {
    this.ngZone.onStable
      .asObservable()
      .pipe(take(1))
      .subscribe(() => {
        const { overlayRef } = this.cdkOverlay;
        const height = this.dropdownElementRef.nativeElement.offsetHeight;
        overlayRef.updateSize({
          minHeight: height + 4
        });
        overlayRef.updatePosition();
      });
  }
}
