import { Component } from "@angular/core";
import { ModalService } from "../../../_services/modal.service";

@Component({
  selector: "app-thecircle",
  templateUrl: "./thecircle.component.html",
})
export class TheCircleComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
