import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/icon-button/README.md';
import { XotbIconButtonModule } from 'ng-xotb/controls/icon-button';
import { DemoIconButtonComponent } from 'projects/xotb-demo/src/app/examples/icon-button/icon-button.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbIconButtonModule, XotbPanelModule]
    })
  )
  .add(
    'IconButton',
    () => ({
      component: DemoIconButtonComponent
    }),
    {
      notes: md
    }
  );
