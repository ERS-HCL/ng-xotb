import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges
} from '@angular/core';
import { HostService } from 'ng-xotb/common';
import { ngClassCombine } from 'ng-xotb/utility';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[xotbIconButton]',
  templateUrl: './icon-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService]
})
export class XotbIconButton implements OnInit, OnChanges {
  @Input() iconName: string;

  /**
   * Fallback value for `alternativeText`.
   */
  @Input() title: string;

  /**
   * The alternative text used to describe the icon.
   */
  @Input() alternativeText;

  /**
   * The variant changes the appearance of the button
   */
  @Input() variant:
    | 'bare'
    | 'container'
    | 'brand'
    | 'border'
    | 'border-filled'
    | 'inverse'
    | 'border-inverse' = 'border';

  /**
   *  For non-bare variants, the size applies to the button, otherwise it applies to the icon itself
   */
  @Input() size: string;

  /**
   * CSS classes that are applied to the SVG.
   */
  @Input() svgClass: string | string[] | Set<string> | { [klass: string]: any };

  get altText() {
    return this.alternativeText || this.title;
  }

  constructor(
    private el: ElementRef,
    private hostService: HostService,
    renderer: Renderer2
  ) {
    renderer.addClass(this.el.nativeElement, 'xotb-button');
    renderer.addClass(this.el.nativeElement, 'xotb-button_icon');
  }

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  iconClass() {
    const hasVariant = this.hasVariant();
    const classes = {
      ['xotb-button__icon']: true,
      [`xotb-button__icon_${this.size}`]: !hasVariant
    };

    return ngClassCombine(this.svgClass, classes);
  }

  private setHostClass() {
    const hasVariant = this.hasVariant();
    this.hostService.updateClass(this.el, {
      [`xotb-button_icon-${this.variant}`]: hasVariant,
      [`xotb-button_icon-${this.size}`]: this.size && hasVariant
    });
  }

  private hasVariant() {
    return this.variant && this.variant !== 'bare';
  }
}
