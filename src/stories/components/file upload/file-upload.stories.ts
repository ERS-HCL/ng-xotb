import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/file-upload/README.md';
import { XotbFileUploadModule } from 'ng-xotb/controls/file-upload';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoFileUploadComponent } from 'projects/xotb-demo/src/app/examples/file-upload/file-upload.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The Components|Components.Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbFileUploadModule, ReactiveFormsModule, XotbPanelModule]
    })
  )
  .add('File Upload', () => ({ component: DemoFileUploadComponent }), {
    notes: md
  });
