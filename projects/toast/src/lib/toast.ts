import {
  Component,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { XotbCommonNotify } from 'ng-xotb/common';

@Component({
  selector: 'xotb-toast',
  templateUrl: './toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'xotbToast'
})
export class XotbToast extends XotbCommonNotify {
  constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef) {
    super(element, renderer, cd, 'toast');
  }
}
