import { Directive, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { XotbMenus } from './menus';

@Directive({
  selector: '[xotbDropdownTrigger]',
  host: {
    'aria-haspopup': 'true'
  }
})
export class XotbDropdownTrigger implements OnDestroy {
  private parentFocusEventSubscription: any;

  constructor(private element: ElementRef, private dropdown: XotbMenus) {
    this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(
      this.focus.bind(this)
    );
  }

  ngOnDestroy() {
    this.parentFocusEventSubscription.unsubscribe();
  }

  @HostListener('click') toggleOpen() {
    this.dropdown.toggle();
  }

  @HostListener('keydown.arrowdown', ['$event'])
  onKeyDownOpen($event: Event) {
    $event.preventDefault();
    this.dropdown.toggle(true);
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
