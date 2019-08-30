import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { uniqueId } from 'ng-xotb/utility';

@Component({
  selector: 'xotb-sections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section.html',
  host: {
    '[class.xotb-sections]': 'true'
  },
  styles: []
})
export class XotbSections {
  @Input() title: string;
  @Input() collapsable = true;
  @Input() open = false;

  @Output() openChange = new EventEmitter<boolean>();

  private _uid = uniqueId('expandable-section');

  @HostBinding('class.xotb-is-open')
  get expanded() {
    return this.collapsable ? this.open : true;
  }

  get uid() {
    return this.collapsable ? this._uid : undefined;
  }

  toggle(event: Event) {
    event.preventDefault();
    this.openChange.emit(!this.open);
  }
}
