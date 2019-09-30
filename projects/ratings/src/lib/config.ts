import { InjectionToken } from '@angular/core';

/** Injection token that can be used to specify default options. */
export const XOTB_RATING_CONFIG = new InjectionToken<XotbRatingConfig>(
  'xotb-rating-config'
);

/**
 * Configuration service for the XotbRating component.
 */
export class XotbRatingConfig<D = any> {
  /**
   * The color of the icon when status is "on"
   */
  colorOn = '#FFB75D';

  /**
   * The color of the icon when status is "off"
   */
  colorOff = '#54698D';
}
