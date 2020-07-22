import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COMPONENTS_LIST } from 'src/app/constants/COMPONENTS_LIST';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentsPageComponent implements OnInit {
  public componentsList: any = COMPONENTS_LIST;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToComponent(selectedComponent: string) {
    console.log('component', selectedComponent);
    this.router.navigate(['/components', selectedComponent]);
  }
}
