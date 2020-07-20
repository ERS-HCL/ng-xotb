import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { ComponentsPageComponent } from './pages/components/components.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentPageComponent } from './pages/content/content.page';
import { DesignPageComponent } from './pages/design/design.page';

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
    HighlightModule,
    MaterialComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
