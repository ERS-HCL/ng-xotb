import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/toast/README.md';
import { XotbToastModule } from 'ng-xotb/controls/toast';
import { DemoToastComponent } from 'projects/xotb-demo/src/app/examples/toast/toast.component';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbToastModule, XotbButtonsModule, XotbPanelModule]
    })
  )
  .add(
    'Toast',
    () => ({
      component: DemoToastComponent
    }),
    {
      notes: md
    }
  );
