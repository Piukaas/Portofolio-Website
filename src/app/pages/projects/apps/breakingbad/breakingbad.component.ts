import { Component } from "@angular/core";
import { ModalService } from "../../../_services/modal.service";

@Component({
  selector: "app-breakingbad",
  templateUrl: "./breakingbad.component.html",
})
export class BreakingBadComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
