import { Component } from '@angular/core';
import { ModalService } from '../../../_services/modal.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
})
export class BallComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
