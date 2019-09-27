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
import { XotbSpinnerModule } from 'projects/spinner/src/public-api';
import { XotbIconButtonModule } from 'projects/icon-button/src/public-api';
import { XotbRatingsModule } from 'projects/ratings/src/public-api';
import { XotbModalsModule } from 'projects/modals/src/public-api';
import { XotbPanelModule } from 'projects/panel/src/public-api';
import { XotbBreadcrumbsModule } from 'projects/breadcrumbs/src/public-api';
import { XotbCarouselModule } from 'projects/carousel/src/public-api';
import { XotbMenusModule } from 'projects/menus/src/public-api';
import { XotbSegmentedButtonModule } from 'projects/segmented-button/src/lib';
import { XotbToastModule } from 'projects/toast/src/public-api';
import { XotbBoxModule } from 'projects/box/src/public-api';
import { XotbComboboxesModule } from 'ng-xotb/controls/comboboxes';
import { XotbColorpickerModule } from 'projects/colorpicker/src/public-api';
import { XotbDatatableModule } from 'projects/datatable/src/public-api';
import { XotbTreeModule } from 'projects/tree/src/public-api';
import { XotbDatepickerModule } from 'projects/datepicker/src/public-api';

/**
 * Examples Component
 */
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsComponent } from './examples/tooltips/tooltips.component';
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
import { DemoSpinnerComponent } from './examples/spinner/spinner.component';
import { DemoIconButtonComponent } from './examples/icon-button/icon-button.component';
import { DemoRatingsComponent } from './examples/ratings/ratings.component';
import { DemoModalsComponent } from './examples/modals/modals.component';
import { DemoPanelComponent } from './examples/panel/panel.component';
import { DemoBreadcrumbsComponent } from './examples/breadcrumbs/breadcrumbs.component';
import { DemoCarouselComponent } from './examples/carousel/carousel.component';
import { DemoMenusComponent } from './examples/menus/menus.component';
import { DemoSegmentedButtonComponent } from './examples/segmented-button/segmented-button.component';
import { DemoToastComponent } from './examples/toast/toast.component';
import { DemoHBoxComponent } from './examples/hbox/hbox.component';
import { DemoComboboxesComponent } from './examples/comboboxes/combobox.component';
import { DemoAutoCompleteComponent } from './examples/autocomplete/autocomplete.component';
import { DemoColorpickerComponent } from './examples/colorpicker/colorpicker.component';
import { DemoDatatableComponent } from './examples/datatable/datatable.component';
import { DemoTreeComponent } from './examples/tree/tree.component';
import { DemoVBoxComponent } from './examples/vbox/vbox.component';
import { DemoCardComponent } from './examples/card/card.component';
import { DemoWelcomeComponent } from './examples/welcome/welcome.component';
import { DemoDatePickerComponent } from './examples/datepicker/datepicker.component';
import { IconographyComponent } from './components/iconography/iconography.component';
import { ThemesComponent } from './components/themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    DemoTooltipsComponent,
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
    DemoProgressbarComponent,
    DemoIconButtonComponent,
    DemoRatingsComponent,
    DemoModalsComponent,
    DemoPanelComponent,
    DemoSpinnerComponent,
    DemoBreadcrumbsComponent,
    DemoCarouselComponent,
    DemoMenusComponent,
    DemoSegmentedButtonComponent,
    DemoToastComponent,
    DemoHBoxComponent,
    DemoVBoxComponent,
    DemoCardComponent,
    DemoComboboxesComponent,
    DemoAutoCompleteComponent,
    DemoColorpickerComponent,
    DemoDatatableComponent,
    DemoTreeComponent,
    DemoWelcomeComponent,
    DemoDatePickerComponent,
    IconographyComponent,
    ThemesComponent
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
    XotbProgressbarModule,
    XotbIconButtonModule,
    XotbRatingsModule,
    XotbModalsModule,
    XotbPanelModule,
    XotbSpinnerModule,
    XotbBreadcrumbsModule,
    XotbCarouselModule,
    XotbMenusModule,
    XotbSegmentedButtonModule,
    XotbToastModule,
    XotbBoxModule,
    XotbComboboxesModule,
    XotbColorpickerModule,
    XotbDatatableModule,
    XotbTreeModule,
    XotbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
