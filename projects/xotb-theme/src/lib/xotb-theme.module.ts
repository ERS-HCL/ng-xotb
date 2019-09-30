import { NgModule } from '@angular/core';
import { XotbThemeService } from './xotb-theme.service';
import { XotbStyledComponent } from './xotb-styled.component';

@NgModule({
  declarations: [XotbStyledComponent],
  exports: [XotbStyledComponent],
  providers: [XotbThemeService]
})
export class XotbThemeModule {}
