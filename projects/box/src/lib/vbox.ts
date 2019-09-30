import { Component } from '@angular/core';

@Component({
  selector: 'xotb-vbox,[xotbVbox]',
  template: `
    <div class="xotb-vbox">
      <ng-content></ng-content>
    </div>
  `
})
export class XotbVBox {}
