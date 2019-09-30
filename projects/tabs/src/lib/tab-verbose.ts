import {
  Directive,
  TemplateRef,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { XotbTab } from './tab';

/*
 * <xotb-tab [label="..."]>
 *    <ng-template xotb-tab-label>...</ng-template>
 *    <ng-template xotb-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </xotb-tab>
 */
@Directive({ selector: '[xotb-tab-label]' })
export class XotbTabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[xotb-tab-content]' })
export class XotbTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: 'xotb-tab',
  providers: [{ provide: XotbTab, useExisting: XotbTabVerbose }]
})
export class XotbTabVerbose extends XotbTab implements AfterContentInit {
  @ContentChild(XotbTabContent, { static: true })
  contentTemplate: XotbTabContent;
  @ContentChild(XotbTabLabel, { static: true }) labelTemplate: XotbTabLabel;

  ngAfterContentInit() {
    if (this.labelTemplate) {
      this.label = this.labelTemplate.templateRef;
    }
    this.templateRef = this.contentTemplate.templateRef;
  }
}
