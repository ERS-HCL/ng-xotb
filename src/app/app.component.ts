import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'xotb-components';
  public currentLocation: string;
  constructor(private router: Router, public location: Location) {}

  ngAfterViewInit() {
    this.currentLocation = this.location.path();
    console.log(this.currentLocation);
  }

  naviagteToComponents() {
    this.router.navigateByUrl('/components');
  }

  naviagteToContent() {
    //this.router.navigateByUrl('/contents');
  }

  naviagteToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
