import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { MaterialComponentsModule } from '../modules/material-components/material-components.module';

@NgModule({
  declarations: [CheckboxComponent, ButtonComponent, CardComponent],
  imports: [CommonModule, MaterialComponentsModule, HighlightModule],
  exports: [MaterialComponentsModule, HighlightModule],
})
export class ComponentsModule {}
