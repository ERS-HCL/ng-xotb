import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/panel/README.md';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
import { DemoPanelComponent } from 'projects/xotb-demo/src/app/examples/panel/panel.component';

storiesOf('The Components|Components.Containers', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'Panel',
    () => ({
      component: DemoPanelComponent
    }),
    {
      notes: md
    }
  );
