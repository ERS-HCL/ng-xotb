import { Injectable } from '@angular/core';

import { theme as lightTheme } from './xotb.theme-light';
import { theme as darkTheme } from './xotb.theme-light';

@Injectable({
  providedIn: 'root'
})
export class XotbThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }

  constructor() {
    // this.toggleLight(); // apply light theme if no theme is provided
  }
}
