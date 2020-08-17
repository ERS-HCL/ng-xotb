import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { MaterialComponentsModule } from 'src/app/modules/material-components/material-components.module';
import { ColorComponent } from './color/color.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { SelectComponent } from './select/select.component';
import { IconographyComponent } from './iconography/iconography.component';
import { DesignkitComponent } from './designkit/designkit.component';
import { ImagesComponent } from './images/images.component';
import { PhotographyComponent } from './photography/photography.component';
import { TypographyComponent } from './typography/typography.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhilosophyComponent, ColorComponent, IllustrationComponent, SelectComponent, IconographyComponent, DesignkitComponent, ImagesComponent, PhotographyComponent, TypographyComponent],
  imports: [CommonModule, MaterialComponentsModule, HighlightModule, FormsModule],
  exports: [MaterialComponentsModule, HighlightModule],
})
export class DesignComponentsModule {}
