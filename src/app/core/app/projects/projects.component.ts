import { Component, ElementRef, ViewChild } from "@angular/core";
import { ModalService } from "../_services/modal.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  @ViewChild("portfolio") portfolio: ElementRef | undefined;

  is2023 = false;
  is2022 = false;
  is2021 = false;
  is2020 = false;

  constructor(private modalService: ModalService) {}

  toggle2023() {
    this.is2023 = !this.is2023;
  }

  toggle2022() {
    this.is2022 = !this.is2022;
  }

  toggle2021() {
    this.is2021 = !this.is2021;
  }

  toggle2020() {
    this.is2020 = !this.is2020;
  }

  openModal(el: any) {
    this.modalService.open(el);
  }
}
