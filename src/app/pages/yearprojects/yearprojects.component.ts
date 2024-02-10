import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-projects',
  templateUrl: './yearprojects.component.html',
})
export class YearProjectsComponent {
  @Input() year: number = 0;
  @Input() projects: any;
  isYearVisible: boolean = false;

  toggleYear() {
    this.isYearVisible = !this.isYearVisible;
  }
}
