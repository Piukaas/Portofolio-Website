import { Component } from "@angular/core";
import { ModalService } from "../../../_services/modal.service";

@Component({
  selector: "app-kramse",
  templateUrl: "./kramse.component.html",
})
export class KramseComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
