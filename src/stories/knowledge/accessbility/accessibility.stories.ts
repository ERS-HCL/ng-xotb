import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The KNOWLEDGE|Accessbility', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .addDecorator(centered)
  .add(
    'defaults',
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
