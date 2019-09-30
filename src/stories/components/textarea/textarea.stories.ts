import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/textarea/README.md';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { XotbTextareaModule } from 'ng-xotb/controls/textarea';
import { DemoTextareaComponent } from 'projects/xotb-demo/src/app/examples/textarea/textarea.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTextareaModule, XotbCheckboxModule, XotbPanelModule]
    })
  )
  .add(
    'TextArea',
    () => ({
      component: DemoTextareaComponent
    }),
    {
      notes: md
    }
  );
