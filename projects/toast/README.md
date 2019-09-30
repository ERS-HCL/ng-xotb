# Toast

A Toast provides a simple feedback about an operation in a small popup.  It is a non-modal, unobtrusive window element used to display brief information to a user, and remains visible only for a short time period

## Usages

#### module.ts
```javascript

...
import { XotbToastModule } from 'ng-xotb/controls/toast';

@NgModule({
    imports:[XotbToastModule]
    ...
})

...
```

### component.html
```html
<xotb-toast iconName="info">
  <h2 class="xotb-text-heading_small">
    This is a toast with an icon next to its
    <a href="javascript:void(0);">message</a>.
  </h2>
  <p>Here's some detail of what happened...</p>
</xotb-toast>
<xotb-toast variant="success" iconName="check-circle">
  <h2 class="xotb-text-heading_small">
    Account <a href="javascript:void(0);">ACME - 100</a> widgets was created.
  </h2>
</xotb-toast>
<xotb-toast
  variant="warning"
  iconName="alert-triangle"
  (close)="onClose('click')"
>
  <h2 class="xotb-text-heading_small">
    Can’t share file “report-q3.pdf” with the
    <a href="javascript:void(0);">selected users</a>.
  </h2>
</xotb-toast>
<button
  class="xotb-m-top_medium"
  type="button"
  [disabled]="showTopToast"
  xotbButton
  (click)="showTopToast = true"
>
  Show toast in container
</button>

<div class="xotb-notify_container">
  <xotb-toast
    *ngIf="showTopToast"
    variant="error"
    (close)="onClose($event); showTopToast = false"
    duration="500000"
  >
    <h2 class="xotb-text-heading_small">
      This error will automatically hide after 5 seconds if you don't click on
      the close button
    </h2>
  </xotb-toast>
</div>

```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    showTopToast = false;

    onClose(reason: string) {
        console.log(`Closed by ${reason}`);
    }
}

...
```

## API
 
#### <xotb-toast>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[variant]` | Severity of the displayed message for theming | `'error' | 'info' | 'success' | 'warning'` | `‘info’` |
| `[iconName]` | Icon name | `string` |  |
| `[duration]` | Number of milliseconds after which, the close event will be triggered with an emitted reason of 'timeout' | `number` |  |
| `[assistiveText]` | Assistive text for accessibility | `string` |  |
| `[closeButtonAssistiveText]` | AVisually hidden label for the close button | `string` | `'Close'` |
| `[dismissible]` | It can suppress the appearance of close button, even if (close) is bound | `boolean` |  |
| `(close)` | Emits the close event reason, like 'button' and 'timeout'. If not bound or if dismissible is false, the close button will not be shown | `EventEmitter<string>` |  |
