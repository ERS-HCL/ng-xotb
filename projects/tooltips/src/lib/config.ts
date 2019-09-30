import { InjectionToken } from '@angular/core';
import { Placement } from 'ng-xotb/utility';

/** Injection token that can be used to specify default options. */
export const XOTB_TOOLTIP_CONFIG = new InjectionToken<XotbTooltipConfig>(
  'xotb-tooltip-config'
);

export class XotbTooltipConfig<D = any> {
  /**
   * Default position relative to host element.
   */
  placement: Placement = 'top';

  /**
   * Whether you can interact with the content of the tooltip.
   */
  interactive = false;

  /**
   * Whether tooltip will open/close without two-way binding input.
   */
  openAuto = false;

  /**
   * Delay in milliseconds until it opens/closes.
   */
  delay: any | any[] = 0;
}
