import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/tree/README.md';
import { XotbTreeModule } from 'ng-xotb/tree';
import { DemoTreeComponent } from 'projects/xotb-demo/src/app/examples/tree/tree.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Tree', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTreeModule, XotbPanelModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoTreeComponent
    }),
    {
      notes: md
    }
  );
