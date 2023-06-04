import { Component } from '@angular/core';
import { ModalService } from '../../../_services/modal.service';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
})
export class AIComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
