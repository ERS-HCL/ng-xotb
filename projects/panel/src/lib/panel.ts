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
  selector: 'xotb-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './panel.html',
  host: {
    '[class.xotb-panel]': 'true'
  },
  styles: []
})
export class XotbPanel {
  @Input() title: string;
  @Input() collapsable = true;
  @Input() open = true;

  @Output() openChange = new EventEmitter<boolean>();

  private _uid = uniqueId('expandable-panel');

  @HostBinding('class.xotb-is-open')
  get expanded() {
    return this.collapsable ? this.open : true;
  }

  get uid() {
    return this.collapsable ? this._uid : undefined;
  }

  toggle(event: Event) {
    event.preventDefault();
    // this.openChange.emit(!this.open);
  }
}
