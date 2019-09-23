import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/datatable/README.md';
import { DemoDatatableComponent } from 'projects/xotb-demo/src/app/examples/datatable/datatable.component';
import { XotbDatatableModule } from 'ng-xotb/datatable';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('Datatable', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbDatatableModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoDatatableComponent
    }),
    {
      notes: md
    }
  );
