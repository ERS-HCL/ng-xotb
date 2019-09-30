import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/select/README.md';
import { DemoSelectComponent } from 'projects/xotb-demo/src/app/examples/select/select.component';
import { XotbSelectModule } from 'ng-xotb/controls/select';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSelectModule, XotbPanelModule]
    })
  )
  .add(
    'Select',
    () => ({
      component: DemoSelectComponent
    }),
    {
      notes: md
    }
  );
