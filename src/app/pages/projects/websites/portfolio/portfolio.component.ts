import { Component } from "@angular/core";
import { ModalService } from "../../../_services/modal.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
})
export class PortfolioComponent {
  constructor(private modalService: ModalService) {}

  openModal(el: any) {
    this.modalService.open(el);
  }
}
