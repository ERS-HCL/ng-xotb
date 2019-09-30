import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DemoPopoverComponent } from './examples/popovers/popovers.component';
import { DemoIconsComponent } from './examples/icons/icons.component';
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
import { DemoDatePickerComponent } from './examples/datepicker/datepicker.component';

const routes: Routes = [
  { path: 'input', component: DemoInputComponent },
  { path: 'tooltips', component: DemoTooltipsComponent },
  { path: 'select', component: DemoSelectComponent },
  { path: 'checkbox', component: DemoCheckboxesComponent },
  { path: 'accordion', component: DemoAccordinComponent },
  { path: 'buttons', component: DemoButtonsComponent },
  { path: 'radio-group', component: DemoRadioGroupComponent },
  { path: 'textarea', component: DemoTextareaComponent },
  { path: 'file-upload', component: DemoFileUploadComponent },
  { path: 'slider', component: DemoSliderComponent },
  { path: 'tabs', component: DemoTabsComponent },
  { path: 'popovers', component: DemoPopoverComponent },
  { path: 'icons', component: DemoIconsComponent },
  { path: 'progressbar', component: DemoProgressbarComponent },
  { path: 'spinner', component: DemoSpinnerComponent },
  { path: 'icon-button', component: DemoIconButtonComponent },
  { path: 'ratings', component: DemoRatingsComponent },
  { path: 'modals', component: DemoModalsComponent },
  { path: 'panel', component: DemoPanelComponent },
  { path: 'breadcrumbs', component: DemoBreadcrumbsComponent },
  { path: 'carousel', component: DemoCarouselComponent },
  { path: 'menus', component: DemoMenusComponent },
  { path: 'pick', component: DemoSegmentedButtonComponent },
  { path: 'toast', component: DemoToastComponent },
  { path: 'vbox', component: DemoVBoxComponent },
  { path: 'hbox', component: DemoHBoxComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'comboboxes', component: DemoComboboxesComponent },
  { path: 'autocomplete', component: DemoAutoCompleteComponent },
  { path: 'colorpicker', component: DemoColorpickerComponent },
  { path: 'datatable', component: DemoDatatableComponent },
  { path: 'tree', component: DemoTreeComponent },
  { path: 'datepicker', component: DemoDatePickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
