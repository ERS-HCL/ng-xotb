import {
  Directive,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  Inject,
  ElementRef,
  Input
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[xotbClickOutside]'
})
export class XotbClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output('xotbClickOutside') clickOutside: EventEmitter<
    void
  > = new EventEmitter();

  @Input('xotbClickOutsideIgnore') ignore: HTMLElement | HTMLElement[];

  private subscription: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef
  ) {}

  ngAfterViewInit() {
    this.subscription = fromEvent(this.document, 'click').subscribe(
      (e: MouseEvent) => {
        if (this.shouldClose(e)) {
          this.clickOutside.emit();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private shouldClose(event: MouseEvent | TouchEvent) {
    const element = event.target as HTMLElement;
    if (
      (event instanceof MouseEvent && event.button === 2) ||
      isContainedIn(element, this.ignore)
    ) {
      return false;
    }
    return !isContainedIn(element, this.element.nativeElement);
  }
}

function isContainedIn(
  el: HTMLElement,
  container: HTMLElement | HTMLElement[]
) {
  if (!container) {
    return false;
  }
  return Array.isArray(container)
    ? container.some(c => c.contains(el))
    : container.contains(el);
}
