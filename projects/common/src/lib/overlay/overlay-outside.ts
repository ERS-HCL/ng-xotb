import {
  Directive,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  NgZone,
  Self
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkConnectedOverlay, ScrollDispatcher } from '@angular/cdk/overlay';

@Directive({
  selector: '[xotbOverlayScrolledOutsideView]'
})
export class XotbOverlayxotbOverlayScrolledOutsideViewDirective
  implements OnInit, OnDestroy {
  @Output('xotbOverlayScrolledOutsideView') overlayOutside: EventEmitter<
    void
  > = new EventEmitter();

  private subscription: Subscription;

  constructor(
    @Self() private cdkOverlay: CdkConnectedOverlay,
    private ngZone: NgZone,
    private scrollDispatcher: ScrollDispatcher
  ) {}

  ngOnInit() {
    const elementRef = this.cdkOverlay.origin.elementRef;
    const scrollableAncestors = this.scrollDispatcher
      .getAncestorScrollContainers(elementRef)
      .map(container => container.getElementRef());

    if (!scrollableAncestors || !scrollableAncestors.length) return;

    this.subscription = this.cdkOverlay.positionChange.subscribe(() => {
      const bounds = elementRef.nativeElement.getBoundingClientRect();

      for (let i = 0, n = scrollableAncestors.length; i < n; i++) {
        const ancestorsBounds = scrollableAncestors[
          i
        ].nativeElement.getBoundingClientRect();
        if (isElementOutside(bounds, ancestorsBounds)) {
          this.ngZone.run(() => this.overlayOutside.emit());
          return;
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}

/**
 * Gets whether an element is scrolled outside of view by its parent scrolling container.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param container Dimensions of element's scrolling container (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 */
export function isElementOutside(element: ClientRect, container: ClientRect) {
  return (
    element.bottom < container.top ||
    element.top > container.bottom ||
    element.right < container.left ||
    element.left > container.right
  );
}
