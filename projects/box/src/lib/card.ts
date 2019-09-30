import { Component } from '@angular/core';

@Component({
  selector: 'xotb-card,[xotbCard]',
  template: `
    <div class="xotb-card">
      <ng-content></ng-content>
    </div>
  `
})
export class XotbCard {}
