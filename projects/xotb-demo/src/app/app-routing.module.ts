import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'input', component: DemoInputComponent },
  { path: 'tooltip', component: DemoTooltipsBasic },
  { path: 'select', component: DemoSelectComponent },
  { path: 'checkboxes', component: DemoCheckboxesComponent },
  { path: 'accordion', component: DemoAccordinComponent },
  { path: 'button', component: DemoButtonsComponent },
  { path: 'radiogroup', component: DemoRadioGroupComponent },
  { path: 'textarea', component: DemoTextareaComponent },
  { path: 'file-upload', component: DemoFileUploadComponent },
  { path: 'slider', component: DemoSliderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
