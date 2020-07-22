import { COMPONENT_NAMES } from '../constants/COMPONENT_NAMES';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';

export const childRoutes = [
  {
    path: COMPONENT_NAMES.CHECKBOX,
    component: CheckboxComponent,
  },
  {
    path: COMPONENT_NAMES.BUTTON,
    component: ButtonComponent,
  },
];
