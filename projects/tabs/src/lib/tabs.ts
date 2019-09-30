import {
  Component,
  Input,
  QueryList,
  ContentChildren,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  AfterContentInit
} from '@angular/core';
import { isInt, InputBoolean } from 'ng-xotb/utility';
import { XotbTab } from './tab';

@Component({
  selector: 'xotb-tabset',
  templateUrl: './tabs.html'
})
export class XotbTabs implements AfterContentInit {
  @Input() set variant(variant: 'default' | 'scoped') {
    const el = this.element.nativeElement;
    this.renderer.removeClass(el, `xotb-tabs_${this.variant}`);
    this._variant = variant;
    this.renderer.addClass(el, `xotb-tabs_${this.variant}`);
  }
  get variant() {
    return this._variant || 'default';
  }

  @ContentChildren(XotbTab) tabs: QueryList<XotbTab>;

  activeTab: XotbTab;
  selected: string | number | XotbTab;
  @Input('selected') set setSelected(selected: string | number | XotbTab) {
    if (selected === this.selected) {
      return;
    }

    this.selected = selected;

    if (!this.tabs) {
      return;
    } // Wait for content to initialize

    this.activate();
  }

  @Output() selectedChange = new EventEmitter<XotbTab>();

  /**
   * Whether every tab's content is instantiated when visible, and destroyed when hidden.
   */
  @Input() @InputBoolean() lazy = true;

  private _variant: 'default' | 'scoped';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(
      this.element.nativeElement,
      `xotb-tabs_${this.variant}`
    );
  }

  ngAfterContentInit() {
    // Initial selection after all tabs are created
    this.activate();
    if (!this.activeTab) {
      setTimeout(() => this.select(this.tabs.first));
    }
  }

  select(tab: XotbTab) {
    this.selectedChange.emit(tab);
  }

  move(evt: Event, moves: number) {
    evt.preventDefault();

    const tabs = this.tabs.toArray();
    const selectedIndex = tabs.indexOf(this.activeTab);
    this.select(tabs[(tabs.length + selectedIndex + moves) % tabs.length]);
  }

  tabClass(tab: XotbTab) {
    return {
      [`xotb-tabs_${this.variant}__content`]: true,
      [`xotb-${tab.active ? 'show' : 'hide'}`]: true
    };
  }

  trackByTab(index, tab: XotbTab) {
    return tab.uid;
  }

  private activate() {
    if (this.activeTab) {
      this.activeTab.active = false;
    }
    this.activeTab = this.findTab();
    if (this.activeTab) {
      this.activeTab.active = true;
    }
  }

  private findTab(value: any = this.selected): XotbTab {
    if (value instanceof XotbTab) {
      return value;
    }
    if (isInt(value)) {
      return this.tabs.toArray()[+value];
    }
    return this.tabs.toArray().find((t: XotbTab) => {
      return t.id && t.id === value;
    });
  }
}
