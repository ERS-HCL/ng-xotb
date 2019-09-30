import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { XotbThemeService } from './xotb-theme.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'xotb-styled-component',
  templateUrl: './xotb-styled.component.html',
  styleUrls: ['../styles/styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XotbStyledComponent implements OnInit {
  constructor(private theme: XotbThemeService) {
    this.theme.toggleLight();
  }

  ngOnInit() {}
}
