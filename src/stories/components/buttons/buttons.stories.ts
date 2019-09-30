import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/buttons/README.md';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { DemoButtonsComponent } from 'projects/xotb-demo/src/app/examples/buttons/buttons.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbButtonsModule, XotbPanelModule]
    })
  )
  .add(
    'Buttons',
    () => ({
      component: DemoButtonsComponent
    }),
    {
      notes: md
    }
  );
