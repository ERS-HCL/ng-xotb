import { Input } from '@angular/core';

export class XotbCommonNotifyClose {
  @Input() set dismissible(dismissible: boolean) {
    this.host.dismissible = dismissible;
  }

  constructor(private host: any) {
    this.host.dismissible = true;
  }
}
