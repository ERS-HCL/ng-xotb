import { DESIGN_BRAND_NAMES } from '../constants/DESIGN_BRAND_NAMES';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { ColorComponent } from './color/color.component';

export const designChildRoutes = [
  {
    // For now default i am navigating to checkbox, change in later
    path: '',
    redirectTo: DESIGN_BRAND_NAMES.PHILOSOPHY,
    pathMatch: 'full',
  },
  {
    path: DESIGN_BRAND_NAMES.PHILOSOPHY,
    component: PhilosophyComponent,
  },
  {
    path: DESIGN_BRAND_NAMES.COLOR,
    component: ColorComponent,
  },
];
