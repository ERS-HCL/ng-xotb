import { DESIGN_BRAND_NAMES } from '../constants/DESIGN_BRAND_NAMES';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { ColorComponent } from './color/color.component';
import { IconographyComponent } from './iconography/iconography.component';
import { DesignkitComponent } from './designkit/designkit.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { ImagesComponent } from './images/images.component';
import { PhotographyComponent } from './photography/photography.component';
import { TypographyComponent } from './typography/typography.component';

export const designChildRoutes = [
  {
    // For now default i am navigating to checkbox, change in later
    path: '',
    redirectTo: DESIGN_BRAND_NAMES.COLOR,
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
  {
    path: DESIGN_BRAND_NAMES.ILLUSTRATION,
    component: IllustrationComponent,
  },
  {
    path: DESIGN_BRAND_NAMES.ICONOGRAPHY,
    component: IconographyComponent,
  },
  {
    path: DESIGN_BRAND_NAMES.DESIGN_KIT,
    component: DesignkitComponent,
  },
  {
    path: DESIGN_BRAND_NAMES.IMAGES,
    component: ImagesComponent,
  },
  {
    path: DESIGN_BRAND_NAMES.PHOTOGRAPHY,
    component: PhotographyComponent,
  },
  {
    path: DESIGN_BRAND_NAMES.TYPOGRAPHY,
    component: TypographyComponent,
  },
];
