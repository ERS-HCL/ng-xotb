import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
