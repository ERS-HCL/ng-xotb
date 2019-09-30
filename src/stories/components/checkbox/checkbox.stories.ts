import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/checkbox/README.md';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { DemoCheckboxesComponent } from 'projects/xotb-demo/src/app/examples/checkboxes/checkboxes.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCheckboxModule, XotbPanelModule]
    })
  )
  .add('Checkbox', () => ({ component: DemoCheckboxesComponent }), {
    notes: md
  });
