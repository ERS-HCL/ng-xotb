import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/input/README.md';
import { XotbInputModule } from 'ng-xotb/controls/input';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { DemoInputComponent } from 'projects/xotb-demo/src/app/examples/input/input.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbInputModule, XotbCheckboxModule, XotbPanelModule]
    })
  )
  .add(
    'Input',
    () => ({
      component: DemoInputComponent
    }),
    {
      notes: md
    }
  );
