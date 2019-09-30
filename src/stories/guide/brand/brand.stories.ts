import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import { IconographyComponent } from 'projects/xotb-demo/src/app/components/iconography/iconography.component';
import { XotbPanelModule } from 'projects/panel/src/public-api';
import { ColorComponent } from 'projects/xotb-demo/src/app/components/colors/color.component';
import { XotbSpinnerModule } from 'projects/spinner/src/public-api';

storiesOf('The GUIDE|Brand', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .addDecorator(centered)
  .add(
    'Principles',
    () => ({
      template: '<p>...to be constructed</p>'
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  )

  .add(
    'Typography',
    () => ({
      template: '<p>...to be constructed</p>'
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  );

storiesOf('The GUIDE|Brand', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule, XotbSpinnerModule]
    })
  )
  .add(
    'Colours',
    () => ({
      component: ColorComponent
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  )
  .add(
    'Iconography',
    () => ({
      component: IconographyComponent
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  );
