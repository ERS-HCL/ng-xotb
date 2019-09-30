import { Component } from '@angular/core';

@Component({
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class DemoToastComponent {
  showTopToast = false;

  onClose(reason: string) {
    console.log(`Closed by ${reason}`);
  }
}
