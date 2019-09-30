import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/radio-group/README.md';
import { XotbRadioGroupModule } from 'ng-xotb/controls/radio-group';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { DemoRadioGroupComponent } from 'projects/xotb-demo/src/app/examples/radio-group/radio-group.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbRadioGroupModule, XotbCheckboxModule, XotbPanelModule]
    })
  )
  .add(
    'RadioGroup',
    () => ({
      component: DemoRadioGroupComponent
    }),
    {
      notes: md
    }
  );
