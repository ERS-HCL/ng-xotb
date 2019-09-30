import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList
} from '@angular/core';
import { XotbBreadcrumb } from './breadcrumb';

@Component({
  selector: 'xotb-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class XotbBreadcrumbs {
  @Input() assistiveText: string;
  @ContentChildren(XotbBreadcrumb) breadcrumbs: QueryList<XotbBreadcrumb>;
}
