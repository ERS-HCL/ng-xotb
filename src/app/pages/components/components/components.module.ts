import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialComponentsModule } from 'src/app/modules/material-components/material-components.module';

@NgModule({
  declarations: [
    CheckboxComponent,
    ButtonComponent,
    CardComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, MaterialComponentsModule, HighlightModule],
  exports: [MaterialComponentsModule, HighlightModule],
})
export class ComponentsModule {}
