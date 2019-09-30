import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DemoWelcomeComponent } from 'projects/xotb-demo/src/app/examples/welcome/welcome.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Welcome', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'About',
    () => ({
      template: `
      <div class="xotb-view-container"><h1 class="heading" id="ng-xotb">ng-xotb</h1>
          <p>xOTB - EDGE's design system. Designed for Designers and Developed for Engineers.</p>
          <h2 class="heading" id="objective">Objective</h2>
          <p>xOTB establishes a common design language for our teams, hosts design assets and patterns for a unified experience, provides basic building blocks to accelerate development, and drafts high level guidelines for content and accessibility.</p>
          <h2 class="heading" id="the-components">The Components</h2>
          <p>The Components provides a robust suite of Angular components out of the box to bootstrap experiences and ensure consistent interaction and style as well as accessibility optimizations. With components, we spend more time on crafting experiences that serve our users and less time on “reinventing the wheel”.</p>
      </div>
      `
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  )
  .add(
    'Getting Started',
    () => ({
      template: `
      <div class="xotb-view-container">
          <h1 class="heading" id="setup">Getting Started</h1>
          <br/>
          <h2 class="heading" id="step-1-installing-packages">Step 1: Installing package</h2>
          <p>You can use either the <code>npm</code> or <code>yarn</code> tool to install packages.</p>
          <pre>
            <code class="language-javascript">    
              npm install ng-xotb
              yarn add ng-xotb
            </code>
          </pre>
          <h2 class="heading" id="step-2-adding-styles">Step 2: Adding styles</h2>
          <p>Including CSS files is required for your application to work correctly.
          If you are using the Angular CLI, you need to add the following to the <code>styles</code> array of your <code>angular.json</code> file.</p>
          <pre>
            <code class="language-javascript">    
              "styles": [
                "node_modules/ng-xotb/xotb-theme/css/styles.min.css",
                ... any other styles
              ],
            </code>
          </pre>
      </div>
      `
    }),
    {
      options: {
        isToolshown: false,
        showPanel: false
      }
    }
  );
