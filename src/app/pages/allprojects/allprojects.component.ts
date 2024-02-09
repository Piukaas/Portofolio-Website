import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
})
export class AllProjectsComponent implements OnInit {
  is2023 = false;
  is2022 = false;
  is2021 = false;
  is2020 = false;
  projects$: Observable<any> = of();
  groupedProjects: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.projects$ = this.http.get('assets/json/projects.json');
    this.projects$
      .pipe(
        map((projects) =>
          projects.reduce((groups: any, project: any) => {
            const year = project.year;
            if (!groups[year]) {
              groups[year] = [];
            }
            groups[year].push(project);
            return groups;
          }, {})
        )
      )
      .subscribe((groupedProjects) => (this.groupedProjects = groupedProjects));
  }

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
