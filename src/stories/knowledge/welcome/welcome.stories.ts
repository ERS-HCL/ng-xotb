import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The KNOWLEDGE|Welcome', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'About',
    () => ({
      template: `
        <div class="xotb-view-container">
          <h2 class="heading">About</h2>
          <p>The Knowledge section covers additional documentation and tools to help you make the the most of the EDGE's Design System.</p>
        </div>
        `
    }),
    {
      options: {
        isToolshown: false
      }
    }
  );
