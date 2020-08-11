import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("theme", "red");
  }

}
