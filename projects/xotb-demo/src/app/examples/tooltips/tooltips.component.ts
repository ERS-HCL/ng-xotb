import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './tooltips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTooltipsComponent {
  placements = ['top', 'right', 'bottom', 'left'];

  placement = this.placements[2];

  open = true;

  change() {
    const i = this.placements.indexOf(this.placement);
    this.placement = this.placements[(i + 1) % 4];
  }
}
