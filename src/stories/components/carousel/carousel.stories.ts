import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/carousel/README.md';
import { XotbCarouselModule } from 'ng-xotb/navigators/carousel';
import { DemoCarouselComponent } from 'projects/xotb-demo/src/app/examples/carousel/carousel.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCarouselModule, XotbPanelModule]
    })
  )
  .add(
    'Carousel',
    () => ({
      component: DemoCarouselComponent
    }),
    {
      notes: md
    }
  );
