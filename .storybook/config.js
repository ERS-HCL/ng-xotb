import { configure, addParameters, addDecorator } from '@storybook/angular';
import theme from './theme';
// import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.ts
const components = require.context(
  '../src/stories/components',
  true,
  /\.stories\.ts$/
);

const guides = require.context('../src/stories/guide', true, /\.stories\.ts$/);

const knowledge = require.context(
  '../src/stories/knowledge',
  true,
  /\.stories\.ts$/
);

function loadStories() {
  // The Components stories
  require('src/stories/components/welcome/welcome.stories.ts');
  components.keys().forEach(filename => components(filename));

  // The Guide stories
  require('src/stories/guide/welcome/welcome.stories.ts');
  guides.keys().forEach(filename => guides(filename));

  // The Knowledge stories
  require('src/stories/knowledge/welcome/welcome.stories.ts');
  knowledge.keys().forEach(filename => knowledge(filename));
}

addParameters({
  options: {
    theme,
    isToolshown: true,
    showPanel: false
  }
});
configure(loadStories, module);
