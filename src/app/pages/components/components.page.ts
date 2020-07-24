import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { COMPONENTS_LIST } from './constants/COMPONENTS_LIST';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentsPageComponent implements OnInit {
  public componentsList: any = COMPONENTS_LIST;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  navigateToComponent(component: string) {
    this.router.navigate(['/components', component]);
  }
}
