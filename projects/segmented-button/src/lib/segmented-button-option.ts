import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { XotbSegmentedButton } from './segmented-button';

@Directive({
  selector: '[xotbSegmentedButtonOption]',
  exportAs: 'xotbSegmentedButtonOption',
  host: {
    role: 'button'
  }
})
export class XotbSegmentedButtonOption implements OnInit, OnDestroy {
  // Use a getter to prevent direct altering
  get active() {
    return this._active;
  }

  @Input('xotbSegmentedButtonOption') set setValue(value: any) {
    this._value = value;
  }

  @Input() xotbSegmentedButtonActiveClass: string;

  private _value: any;
  private _active = false;
  private _subscription: Subscription;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private xotbSegmentedButton: XotbSegmentedButton
  ) {}

  @HostListener('click')
  @HostListener('keydown.Space', ['$event'])
  @HostListener('keydown.Enter', ['$event'])
  pick(evt?: Event) {
    if (evt) {
      evt.preventDefault();
    }
    this.xotbSegmentedButton.selectOption(this._value);
  }

  ngOnInit() {
    this._subscription = this.xotbSegmentedButton.values.subscribe(value => {
      this._active = this._isActive(value);

      const activeClass =
        this.xotbSegmentedButtonActiveClass ||
        this.xotbSegmentedButton.xotbSegmentedButtonActiveClass;
      if (activeClass) {
        if (this.active) {
          this.renderer.addClass(this.element.nativeElement, activeClass);
        } else {
          this.renderer.removeClass(this.element.nativeElement, activeClass);
        }
      }
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this.xotbSegmentedButton.optionRemoved(this._value);
  }

  private _isActive(value: any) {
    if (this.xotbSegmentedButton.isMultiple) {
      if (!value) {
        return false;
      }
      return Array.isArray(value)
        ? value.indexOf(this._value) > -1
        : !!value[this._value];
    } else {
      return this._value === value;
    }
  }
}
