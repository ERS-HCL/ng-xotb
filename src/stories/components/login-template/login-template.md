# Login Template

Login template built with `ng-xotb` library

## Usages

#### module.ts

```javascript

import { ReactiveFormsModule } from '@angular/forms';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
import { XotbInputModule } from 'ng-xotb/controls/input';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

@NgModule({
    imports:[
        XotbInputModule,
        XotbButtonsModule,
        ReactiveFormsModule,
        XotbPanelModule
    ]
    ...
})

```

#### component.html

```html
<div class="login-container">
  <xotb-panel title="Login">
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">
      <xotb-input
        label="Username"
        [error]="
          form.username.touched && form.username.errors
            ? 'Username is required'
            : null
        "
      >
        <input
          xotb
          class="form-control"
          type="input"
          formControlName="username"
          [required]="true"
        />
      </xotb-input>
      <xotb-input
        label="Password"
        [error]="
          form.password.touched && form.password.errors
            ? 'Password is required'
            : null
        "
      >
        <input
          xotb
          class="form-control"
          formControlName="password"
          type="password"
          [required]="true"
        />
      </xotb-input>
      <br />
      <button
        xotbButton
        variant="brand"
        type="submit"
        [disabled]="loginForm.invalid"
      >
        Login
      </button>
      <button xotbButton variant="outline-brand">Signup</button>
    </form>
  </xotb-panel>
</div>
```

#### component.ts

```javascript

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginTemplateComponent {
  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit(value) {
    console.log(value);
  }
}

```

#### component.css

```css
.login-container {
  width: 500px;
  margin: 0 auto;
}
```
