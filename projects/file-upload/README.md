# FileUpload

This tool facilitates you to upload the content (placed offline) from your device to your web application (online).


## Usages

#### module.ts
```javascript

...
import { ReactiveFormsModule } from '@angular/forms';
import { XotbFileUploadModule } from 'ng-xotb/controls/file-upload';


@NgModule({
    imports:[XotbFileUploadModule, ReactiveFormsModule]
    ...
})

...
```

#### component.html
```html
<xotb-file-upload
    label="Attachment"
    [formControl]="ctrl"
    [accept]="['image/*', 'application/pdf', '.mp3']"
    maxFiles="2"
    maxFilesize="1048576"
    [error]="ctrl.invalid ? errorTpl : null"
></xotb-file-upload>

<div *ngIf="ctrl.valid">
    <div *ngFor="let file of ctrl.value">{{ file.name }}</div>
</div>

<ng-template #errorTpl>
    <ng-container *ngIf="ctrl.errors['required']">Please select a file.</ng-container>
    <ng-container *ngIf="ctrl.errors.xotbFileUpload?.invalidType as file">
        Oh no, invalid type<b> {{ file.type }}</b> for "{{file.name}}"!
    </ng-container>
    <ng-container *ngIf="ctrl.errors.xotbFileUpload?.maxFilesize as file">
        "{{ file.name }}" is bigger than 1MB!
    </ng-container>
    <ng-container *ngIf="ctrl.errors.xotbFileUpload?.maxFiles">Too many files selected!<ng-container>
</ng-template>
```

#### component.ts
```javascript

...

import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    ctrl: new FormControl(null, [Validators.required])
}

...
```

## API
 
#### <xotb-file-upload>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[label]` | Label that appears above the upload area | `string | TemplateRef` |  |
| `[required]` | Highlights the field as a required field | `boolean` | `false` |
| `[accept]` | File extensions and types that can be accepted | `string | string[]` |  |
| `[disabled]` | Whether file selection is disabled | `boolean` | `false` |
| `[maxFiles]` | How many files can be selected simultaneously. 0 means unlimited | `number` | `1` |
| `[maxFilesize]` | File size limit in bytes. 0 means unlimited | `number` | `0` |
| `[error]` | Error message | `string | TemplateRef` |
| `[uploadButtonLabel]` | Text for button to open file selector | `string` | `'Upload Files'` |
