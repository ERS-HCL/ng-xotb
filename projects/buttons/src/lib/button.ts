import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { HostService } from 'ng-xotb/common';

@Component({
  selector: '[xotbButton]',
  templateUrl: './button.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService]
})
export class XotbButton implements OnInit {
  /**
   * Changes the appearance of the button.
   */
  @Input() variant:
    | 'base'
    | 'neutral'
    | 'brand'
    | 'outline-brand'
    | 'destructive'
    | 'text-destructive'
    | 'inverse'
    | 'success' = 'neutral';

  /**
   * LDS name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
   */
  @Input() iconName: string;

  /**
   * Describes the position of the icon with respect to xotb-content.
   */
  @Input() iconPosition: 'left' | 'right' = 'left';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private hostService: HostService
  ) {
    this.renderer.addClass(this.el.nativeElement, 'xotb-button');
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.variant) {
      this.setHostClass();
    }
  }

  hasLeftIcon() {
    return (
      this.iconName && (!this.iconPosition || this.iconPosition === 'left')
    );
  }

  hasRightIcon() {
    return this.iconName && this.iconPosition === 'right';
  }

  private setHostClass() {
    this.hostService.updateClass(this.el, {
      [`xotb-button_${this.variant}`]: this.variant && this.variant !== 'base'
    });
  }
}
