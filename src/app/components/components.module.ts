import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { MaterialComponentsModule } from '../modules/material-components/material-components.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [CheckboxComponent, ButtonComponent, CardComponent, NotFoundComponent],
  imports: [CommonModule, MaterialComponentsModule, HighlightModule],
  exports: [MaterialComponentsModule, HighlightModule],
})
export class ComponentsModule {}
