import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/datepicker/README.md';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
import { XotbDatepickerModule } from 'ng-xotb/controls/datepicker';
import { DemoDatePickerComponent } from 'projects/xotb-demo/src/app/examples/datepicker/datepicker.component';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbDatepickerModule, XotbPanelModule]
    })
  )
  .add(
    'Datepicker',
    () => ({
      component: DemoDatePickerComponent
    }),
    {
      notes: md
    }
  );
