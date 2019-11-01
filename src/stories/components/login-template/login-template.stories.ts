import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from './login-template.md';
import { ReactiveFormsModule } from '@angular/forms';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
import { LoginTemplateComponent } from 'projects/xotb-demo/src/app/templates/login/login.component';
import { XotbInputModule } from 'ng-xotb/controls/input';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('The Components|Components.Templates', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        XotbInputModule,
        XotbButtonsModule,
        ReactiveFormsModule,
        XotbPanelModule
      ]
    })
  )
  .add('Login Template', () => ({ component: LoginTemplateComponent }), {
    notes: md
  });
