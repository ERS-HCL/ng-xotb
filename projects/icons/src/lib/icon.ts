import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { isRequired, ngClassCombine } from 'ng-xotb/utility';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'xotb-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbIcon {
  @isRequired
  @Input()
  iconName: string;

  /**
   * The appearance of a icon.
   */
  @Input() variant:
    | 'default'
    | 'warning'
    | 'error'
    | 'light'
    | 'inverse'
    | null = 'default';

  /**
   * The size of the icon.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';

  /**
   * Text used to describe the icon for accessibility.
   */
  @Input() alternativeText: string;

  /**
   * CSS classes that are applied to the SVG.
   */
  @Input() svgClass: string | string[] | Set<string> | { [klass: string]: any };

  /**
   * CSS Style to apply on svg
   */
  @Input() svgStyle: object;

  svgClasses() {
    const [category] = this.iconName.split(':');
    const isUtility = category === 'utility';
    const isDefaultOrInverse =
      this.variant === 'default' || this.variant === 'inverse';

    const classes = {
      [`xotb-icon_${this.size}`]: !!this.size && this.size !== 'medium',
      [`xotb-icon-text-${
        isDefaultOrInverse ? 'default' : this.variant
      }`]: isDefaultOrInverse
        ? this.variant === 'default'
          ? isUtility
          : !isUtility
        : !!this.variant
    };

    return ngClassCombine(this.svgClass, classes);
  }
}
