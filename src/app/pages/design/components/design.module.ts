import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { MaterialComponentsModule } from 'src/app/modules/material-components/material-components.module';
import { ColorComponent } from './color/color.component';
import { IllustrationComponent } from './illustration/illustration.component';

@NgModule({
  declarations: [PhilosophyComponent, ColorComponent, IllustrationComponent],
  imports: [CommonModule, MaterialComponentsModule, HighlightModule],
  exports: [MaterialComponentsModule, HighlightModule],
})
export class DesignComponentsModule {}
