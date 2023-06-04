import { Component } from '@angular/core';
import { ModalService } from '../../../_services/modal.service';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
})
export class MazeComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
