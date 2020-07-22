import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COMPONENTS_LIST } from 'src/app/constants/COMPONENTS_LIST';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { COMPONENT_NAMES } from 'src/app/constants/COMPONENT_NAMES';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentsPageComponent implements OnInit {
  public selectedComponent: string = COMPONENT_NAMES.CHECKBOX;
  public componentsList: any = COMPONENTS_LIST;
  constructor(private router: Router, public location: Location) {}

  ngOnInit(): void {
    console.log('location', this.location.path());
  }

  navigateToComponent(component: string) {
    this.selectedComponent = component;
    this.router.navigate(['/components', component]);
  }
}
