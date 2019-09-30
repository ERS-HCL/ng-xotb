import { Component } from '@angular/core';
import * as libraries from 'scripts/libraries';

console.log(libraries);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xOTB-Demo';

  ignoreLibs = ['common', 'forms', 'utility'];
  libraries = [
    ...libraries.filter(lib => this.ignoreLibs.indexOf(lib) < 0),
    'autocomplete'
  ].sort();
}
