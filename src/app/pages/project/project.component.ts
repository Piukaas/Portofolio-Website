import { Component, Input } from '@angular/core';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  @Input() project: any;
  @Input() layout: 'even' | 'odd' = 'even';

  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
