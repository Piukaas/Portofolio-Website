import { Component } from "@angular/core";
import { ModalService } from "../../../_services/modal.service";

@Component({
  selector: "app-clockbuster",
  templateUrl: "./clockbuster.component.html",
})
export class ClockbusterComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
