import { Component } from '@angular/core';

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class DemoTabsComponent {
  variant = 'scoped';
  id = 0;
  selectedTab: any = 'sum';
  details: number[] = [];

  change() {
    this.variant = this.variant === 'scoped' ? null : 'scoped';
  }

  addDetail() {
    this.details.push(this.id++);
  }

  isDisabled() {
    return this.selectedTab === 'sum' || this.selectedTab.id === 'sum';
  }

  protected tabChange(detail: number, event: string) {
    console.log('detail', detail, event);
  }

  protected removeDetail(detail: Object) {
    this.details = this.details.filter(d => d !== detail);
    this.selectedTab = 'sum';
  }
}
