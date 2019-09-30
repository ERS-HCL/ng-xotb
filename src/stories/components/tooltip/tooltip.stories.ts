import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/tooltips/README.md';
import { DemoTooltipsComponent } from 'projects/xotb-demo/src/app/examples/tooltips/tooltips.component';
import { XotbTooltipsModule } from 'ng-xotb/controls/tooltips';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTooltipsModule, XotbPanelModule, XotbButtonsModule]
    })
  )
  .add(
    'Tooltips',
    () => ({
      component: DemoTooltipsComponent
    }),
    {
      notes: md
    }
  );
