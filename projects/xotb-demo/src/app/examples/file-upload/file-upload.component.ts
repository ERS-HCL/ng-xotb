import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class DemoFileUploadComponent {
  ctrl = new FormControl(null, [Validators.required]);
}
