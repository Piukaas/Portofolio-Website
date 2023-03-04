import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  is2023 = false;
  is2022 = false;
  is2021 = false;
  is2020 = false;

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
}
