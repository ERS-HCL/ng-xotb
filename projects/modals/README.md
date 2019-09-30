# Modals

Modal dialogs interrupt users and demand an action by temporarily blocking interactions with the main view of a site. They are appropriate when the user's attention needs to be directed towards important information

## Usages

#### module.ts
```javascript

...
import { XotbModalsModule } from 'ng-xotb/controls/modals';

@NgModule({
    imports:[XotbModalsModule]
    ...
})

...
```

#### component.html
```html
<div>
  <h1>Home</h1>
  <p>{{ bodyText }}</p>
  <button xotbButton (click)="openModal('custom-modal-1')">Open Modal 1</button>
</div>

<xotb-modal id="custom-modal-1">
  <h1>Modal heading!</h1>
  <div>
    Home page text:
    <input xotb type="text" [(ngModel)]="bodyText" style="width: 200px" />
  </div>

  <button xotbButton size="small" (click)="closeModal('custom-modal-1')">
    Close
  </button>
</xotb-modal>
```

#### component.ts
```javascript

...

import { XotbModalService } from 'ng-xotb/controls/modals'

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    bodyText: string;

    constructor(private modalService: XotbModalService) {}

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}

...
```

## API
 
#### <xotb-modal>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[id]` |  modal id | `string` |  |