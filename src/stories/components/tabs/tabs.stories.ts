import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/tabs/README.md';
import { DemoTabsComponent } from 'projects/xotb-demo/src/app/examples/tabs/tabs.component';
import { XotbTabsModule } from 'ng-xotb/navigators/tabs';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTabsModule, XotbButtonsModule, XotbPanelModule]
    })
  )
  .add(
    'Tabs',
    () => ({
      component: DemoTabsComponent
    }),
    {
      notes: md
    }
  );
