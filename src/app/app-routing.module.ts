import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { ComponentsPageComponent } from './pages/components/components.page';
import { ContentPageComponent } from './pages/content/content.page';
import { DesignPageComponent } from './pages/design/design.page';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { COMPONENT_NAMES } from './constants/COMPONENT_NAMES';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'components',
    component: ComponentsPageComponent,
    children: [
      {
        path: COMPONENT_NAMES.CHECKBOX,
        component: CheckboxComponent,
      },
      {
        path: COMPONENT_NAMES.BUTTON,
        component: ButtonComponent,
      },
    ],
  },
  {
    path: 'content',
    component: ContentPageComponent,
  },
  {
    path: 'design',
    component: DesignPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
