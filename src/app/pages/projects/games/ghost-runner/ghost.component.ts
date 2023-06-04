import { Component } from '@angular/core';
import { ModalService } from '../../../_services/modal.service';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
})
export class GhostComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
