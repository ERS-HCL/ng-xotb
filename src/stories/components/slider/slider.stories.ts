import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/slider/README.md';
import { XotbSliderModule } from 'ng-xotb/controls/slider';
import { DemoSliderComponent } from 'projects/xotb-demo/src/app/examples/slider/slider.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSliderModule, XotbPanelModule]
    })
  )
  .add(
    'Slider',
    () => ({
      component: DemoSliderComponent
    }),
    {
      notes: md
    }
  );
