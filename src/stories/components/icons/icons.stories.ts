import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import md from 'projects/icons/README.md';
import { DemoIconsComponent } from 'projects/xotb-demo/src/app/examples/icons/icons.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbIconsModule, XotbPanelModule]
    })
  )
  .add(
    'Icons',
    () => ({
      component: DemoIconsComponent
    }),
    {
      notes: md
    }
  );
