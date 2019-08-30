import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * Library modules
 */
import { XotbInputModule } from 'projects/input/src/public-api';
import { XotbTooltipsModule } from 'projects/tooltips/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { XotbSelectModule } from 'projects/select/src/public-api';
import { XotbAccordionModule } from 'projects/accordion/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { XotbRadioGroupModule } from 'projects/radio-group/src/public-api';
import { XotbTextareaModule } from 'projects/textarea/src/public-api';
import { XotbFileUploadModule } from 'projects/file-upload/src/public-api';
import { XotbSliderModule } from 'projects/slider/src/public-api';
import { XotbIconsModule } from 'projects/icons/src/public-api';
import { XotbTabsModule } from 'projects/tabs/src/public-api';
import { XotbPopoversModule } from 'projects/popovers/src/public-api';
import { XotbProgressbarModule } from 'projects/progressbar/src/public-api';

/**
 * Examples Component
 */
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsBasic } from './examples/tooltips/tooltips.component';
import { DemoSelectComponent } from './examples/select/select.component';
import { DemoCheckboxesComponent } from './examples/checkboxes/checkboxes.component';
import { DemoAccordinComponent } from './examples/accordion/accordion.component';
import { DemoButtonsComponent } from './examples/buttons/buttons.component';
import { DemoRadioGroupComponent } from './examples/radio-group/radio-group.component';
import { DemoTextareaComponent } from './examples/textarea/textarea.component';
import { DemoFileUploadComponent } from './examples/file-upload/file-upload.component';
import { DemoSliderComponent } from './examples/slider/slider.component';
import { DemoTabsComponent } from './examples/tabs/tabs.component';
import { DemoIconsComponent } from './examples/icons/icons.component';
import { DemoPopoverComponent } from './examples/popovers/popovers.component';
import { DemoProgressbarComponent } from './examples/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    DemoTooltipsBasic,
    DemoSelectComponent,
    DemoCheckboxesComponent,
    DemoAccordinComponent,
    DemoButtonsComponent,
    DemoRadioGroupComponent,
    DemoTextareaComponent,
    DemoFileUploadComponent,
    DemoSliderComponent,
    DemoTabsComponent,
    DemoPopoverComponent,
    DemoIconsComponent,
    DemoProgressbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    XotbInputModule,
    XotbTooltipsModule,
    XotbSelectModule,
    XotbCheckboxModule,
    XotbAccordionModule,
    XotbButtonsModule,
    XotbRadioGroupModule,
    XotbTextareaModule,
    XotbFileUploadModule,
    XotbSliderModule,
    XotbTabsModule,
    XotbPopoversModule,
    XotbIconsModule,
    XotbProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
