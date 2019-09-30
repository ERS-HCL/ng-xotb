import { Component } from '@angular/core';

@Component({
  selector: 'xotb-hbox,[xotbHbox]',
  template: `
    <div class="xotb-hbox">
      <ng-content></ng-content>
    </div>
  `
})
export class XotbHBox {}
