import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'xotb-state-on',
  templateUrl: './button-states.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbButtonStateOn {
  /**
   * LDS name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
   */
  @Input() iconName: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, this.getHostClass());
  }

  protected getHostClass() {
    return 'xotb-text-selected';
  }
}

@Component({
  selector: 'xotb-state-off',
  templateUrl: './button-states.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbButtonStateOff extends XotbButtonStateOn {
  protected getHostClass() {
    return 'xotb-text-not-selected';
  }
}

@Component({
  selector: 'xotb-state-hover',
  templateUrl: './button-states.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbButtonStateHover extends XotbButtonStateOn {
  protected getHostClass() {
    return 'xotb-text-selected-focus';
  }
}
