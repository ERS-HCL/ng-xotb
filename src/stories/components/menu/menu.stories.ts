import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/menus/README.md';
import { XotbMenusModule } from 'ng-xotb/navigators/menus';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { DemoMenusComponent } from 'projects/xotb-demo/src/app/examples/menus/menus.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        XotbMenusModule,
        XotbIconsModule,
        XotbButtonsModule,
        XotbPanelModule
      ]
    })
  )
  .add('Menus', () => ({ component: DemoMenusComponent }), {
    notes: md
  });
