import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DESIGN_BRAND_LIST } from './constants/DESIGN_BRAND_LIST';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DESIGN_BRAND_NAMES } from './constants/DESIGN_BRAND_NAMES';

@Component({
  selector: 'app-design',
  templateUrl: './design.page.html',
  styleUrls: ['./design.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DesignPageComponent implements OnInit {

  public selectedComponent: string = DESIGN_BRAND_NAMES.COLOR;
  public componentsList: any = DESIGN_BRAND_LIST;
  constructor(private router: Router, public location: Location) {}

  ngOnInit(): void {
    console.log('location', this.location.path());
  }

  navigateToComponent(component: string) {
    this.selectedComponent = component;
    this.router.navigate(['/design', component]);
  }
}