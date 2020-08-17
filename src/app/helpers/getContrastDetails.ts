import getContrast from 'get-contrast';
import { WCAG_RATIO } from '../pages/design/constants/WCAG';
import { COLOR_RATIO_CONFIG } from '../pages/design/constants/COLOR_RATIO_CONFIG';

const getContrastDetails = (fontColor, backgroundColor, fontSizeValue) => {
  const ratio = getContrast.ratio(fontColor, backgroundColor);
  const fontSize = fontSizeValue || COLOR_RATIO_CONFIG.SIZE.SMALL;
  const wcagResults = { WCAG_AA: false, WCAG_AAA: false };

  if (fontSize >= WCAG_RATIO.FONT_CUTOFF) {
    wcagResults.WCAG_AA = ratio >= WCAG_RATIO.AA_LG;
    wcagResults.WCAG_AAA = ratio >= WCAG_RATIO.AAA_LG;
  } else {
    wcagResults.WCAG_AA = ratio >= WCAG_RATIO.AA_SM;
    wcagResults.WCAG_AAA = ratio >= WCAG_RATIO.AAA_SM;
  }

  return {
    ratio,
    wcagResults,
  };
};

export default getContrastDetails;
