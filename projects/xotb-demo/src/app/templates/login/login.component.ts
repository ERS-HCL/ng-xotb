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
