import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/accordion/README.md';
import { XotbAccordionModule } from 'ng-xotb/containers/accordion';
import { DemoAccordinComponent } from 'projects/xotb-demo/src/app/examples/accordion/accordion.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Containers', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbAccordionModule, XotbPanelModule]
    })
  )
  .add(
    'Accordion',
    () => ({
      component: DemoAccordinComponent
    }),
    {
      notes: md
    }
  );
