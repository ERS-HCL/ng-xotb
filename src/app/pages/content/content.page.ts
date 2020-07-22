import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
