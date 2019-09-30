import { Component, OnInit } from '@angular/core';

// import { ModalService } from '../modal.services';
import { XotbModalService } from 'projects/modals/src/public-api';

@Component({ templateUrl: './modals.component.html' })
export class DemoModalsComponent implements OnInit {
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
