import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { ComponentsPageComponent } from './pages/components/components.page';
import { ContentPageComponent } from './pages/content/content.page';
import { DesignPageComponent } from './pages/design/design.page';
import { designChildRoutes } from './pages/design/components/design.routes';
import { childComponentRoutes } from './pages/components/components/component.routes';

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
    children: childComponentRoutes,
  },
  {
    path: 'content',
    component: ContentPageComponent,
  },
  {
    path: 'design',
    component: DesignPageComponent,
    children: designChildRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
