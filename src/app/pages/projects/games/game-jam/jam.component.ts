import { Component } from '@angular/core';
import { ModalService } from '../../../_services/modal.service';

@Component({
  selector: 'app-jam',
  templateUrl: './jam.component.html',
})
export class GameJamComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
