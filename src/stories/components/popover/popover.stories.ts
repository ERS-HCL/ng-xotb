import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/popovers/README.md';
import { DemoPopoverComponent } from 'projects/xotb-demo/src/app/examples/popovers/popovers.component';
import { XotbPopoversModule } from 'ng-xotb/controls/popovers';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPopoversModule, XotbButtonsModule, XotbPanelModule]
    })
  )
  .add(
    'Popover',
    () => ({
      component: DemoPopoverComponent
    }),
    {
      notes: md
    }
  );
