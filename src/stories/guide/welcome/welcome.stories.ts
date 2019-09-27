import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The GUIDE|Welcome', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'About',
    () => ({
      template: `<div class="xotb-view-container"><h2 class="heading">About</h2><p>The Guide is your hotspot for design best practices and principles when leveraging EDGE's xOTB. It sources every details required when leveraging typography, colours, iconography and The components when you craft a page design. Utilize the guidelines to get familiar with design methodologies. For detailed specs on specific components, please visit The Components section and choose respective modules</p></div>`
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  );
