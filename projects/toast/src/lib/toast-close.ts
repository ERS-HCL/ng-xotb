import { Directive } from '@angular/core';
import { XotbToast } from './toast';
import { XotbCommonNotifyClose } from 'ng-xotb/common';

@Directive({
  selector: 'xotb-toast[close],xotb-toast[xotbClose]'
})
export class XotbToastClose extends XotbCommonNotifyClose {
  constructor(toast: XotbToast) {
    super(toast);
  }
}
