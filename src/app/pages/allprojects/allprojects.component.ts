import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
})
export class AllProjectsComponent implements OnInit {
  projects$: Observable<any> = of();
  yearProjects: any;
  sortedProjects: any;
  sort: string = 'year';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.projects$ = this.http.get('assets/json/projects.json');
    this.projects$
      .pipe(
        map((projects: any[]) => {
          // Group projects by year
          const yearProjects = projects.reduce((groups: any, project: any) => {
            const year = project.year;
            if (!groups[year]) {
              groups[year] = [];
            }
            groups[year].push(project);
            return groups;
          }, {});

          // Sort all projects alphabetically (A-Z)
          this.sortedProjects = [...projects].sort((a, b) =>
            a.title.localeCompare(b.title)
          );

          return yearProjects;
        })
      )
      .subscribe((yearProjects) => (this.yearProjects = yearProjects));
  }
}
