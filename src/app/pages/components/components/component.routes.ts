import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';

export const childComponentRoutes = [
  {
    // For now default i am navigating to checkbox, change in later
    path: '',
    redirectTo: 'checkBox',
    pathMatch: 'full',
  },
  {
    path: 'checkBox',
    component: CheckboxComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
];
