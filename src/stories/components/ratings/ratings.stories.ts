import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/ratings/README.md';
import { DemoRatingsComponent } from 'projects/xotb-demo/src/app/examples/ratings/ratings.component';
import { XotbRatingsModule } from 'ng-xotb/controls/ratings';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbRatingsModule, XotbButtonsModule, XotbPanelModule]
    })
  )
  .add(
    'Ratings',
    () => ({
      component: DemoRatingsComponent
    }),
    {
      notes: md
    }
  );
