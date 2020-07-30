import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COLOR_SYSTEM_LIST } from '../../constants/COLOR_SYSTEM_LIST';
import { COLOR_PHILOSOPHY_LIST } from '../../constants/COLOR_PHILOSOPHY_LIST';
import { DOMAIN_LIST } from '../../constants/DOMAIN_LIST';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorComponent implements OnInit {
  public colorSystemList: any = COLOR_SYSTEM_LIST['system_colors'];
  public colorPhilosophyList: any = COLOR_PHILOSOPHY_LIST;
  public domainList: any = DOMAIN_LIST;
  constructor() { }

  ngOnInit(): void {
    console.log(this.colorSystemList);
    console.log(this.domainList, "domainListdomainList");
  }

}
