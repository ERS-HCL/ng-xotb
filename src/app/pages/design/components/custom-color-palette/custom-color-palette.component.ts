import { COLOR_SYSTEM_LIST } from './../../constants/COLOR_SYSTEM_LIST';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COLOR_PHILOSOPHY_LIST } from '../../constants/COLOR_PHILOSOPHY_LIST';

@Component({
  selector: 'app-custom-color-palette',
  templateUrl: './custom-color-palette.component.html',
  styleUrls: ['./custom-color-palette.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomColorPaletteComponent implements OnInit {
  public colorPhilosophyList: any = COLOR_PHILOSOPHY_LIST;
  public colorSystemList: any = COLOR_SYSTEM_LIST['system_colors'];
  constructor() { }

  ngOnInit(): void {
  }

}
