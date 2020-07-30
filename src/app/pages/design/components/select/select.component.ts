import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

interface optionObject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {
  @Input() options: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.options, '--------options');
  }
}
