import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbBreadcrumbsModule } from 'ng-xotb/navigators/breadcrumbs';

import md from 'projects/breadcrumbs/README.md';
import { DemoBreadcrumbsComponent } from 'projects/xotb-demo/src/app/examples/breadcrumbs/breadcrumbs.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
storiesOf('The Components|Components.Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbBreadcrumbsModule, XotbPanelModule]
    })
  )
  .add(
    'Breadcrumb',
    () => ({
      component: DemoBreadcrumbsComponent
    }),
    {
      notes: md
    }
  );
