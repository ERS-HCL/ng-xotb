import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The GUIDE|Pattern', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .addDecorator(centered)
  .add(
    'Forms',
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
    'Modals',
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
