import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/modals/README.md';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbModalsModule } from 'ng-xotb/controls/modals';
import { DemoModalsComponent } from 'projects/xotb-demo/src/app/examples/modals/modals.component';
import { XotbInputModule } from 'ng-xotb/controls/input';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        XotbModalsModule,
        XotbButtonsModule,
        XotbInputModule,
        XotbPanelModule
      ]
    })
  )
  .add(
    'Modals',
    () => ({
      component: DemoModalsComponent
    }),
    {
      notes: md
    }
  );
