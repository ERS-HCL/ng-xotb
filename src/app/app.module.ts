import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { ComponentsPageComponent } from './pages/components/components.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { ContentPageComponent } from './pages/content/content.page';
import { DesignPageComponent } from './pages/design/design.page';
import { ComponentsModule } from './pages/components/components/components.module';
import { DesignComponentsModule } from './pages/design/components/design.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    ComponentsPageComponent,
    ContentPageComponent,
    DesignPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    DesignComponentsModule,
    MaterialComponentsModule,
  ],
  exports: [ComponentsModule, DesignComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
