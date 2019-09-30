import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { XotbModalService } from './modals.service';

@Component({
  selector: 'xotb-modal',
  template: `
    <div class="xotb-modal">
      <div class="xotb-modal-body">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="xotb-modal-background"></div>
  `
})
export class XotbModal implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: XotbModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function(e: any) {
      if (e.target.className === 'xotb-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('xotb-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('xotb-modal-open');
  }
}
