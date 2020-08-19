import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COLOR_PHILOSOPHY_LIST } from '../../constants/COLOR_PHILOSOPHY_LIST';

@Component({
  selector: 'app-custom-color-palette-list',
  templateUrl: './custom-color-palette-list.component.html',
  styleUrls: ['./custom-color-palette-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomColorPaletteListComponent implements OnInit {
public ovrviewColorList: any = COLOR_PHILOSOPHY_LIST.overview_colors.colors;
  constructor() { }

  ngOnInit(): void {
  }

}
