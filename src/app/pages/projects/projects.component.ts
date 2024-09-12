import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  @ViewChild('nextView', { static: true })
  nextViewRef!: ElementRef;
  projects$: any;
  projectTypeCounts: { [key: string]: number } = {};

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.projects$ = this.http.get('assets/json/projects.json');
    this.projects$
      .pipe(
        map((projects: any[]) => {
          // Count the number of projects for each type
          projects.forEach((project: any) => {
            if (!this.projectTypeCounts[project.projectType]) {
              this.projectTypeCounts[project.projectType] = 0;
            }
            this.projectTypeCounts[project.projectType]++;
          });
        })
      )
      .subscribe();
  }

  scrollNextView() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        this.scrollNextView();
      });

    const nextViewElement = this.nextViewRef.nativeElement;
    if (nextViewElement) {
      nextViewElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  allProjects() {
    this.router.navigate(['/projects']);
    this.scrollNextView();
  }

  navigateToProjects(type: string) {
    this.router.navigate(['/projects/category'], {
      queryParams: { type: type },
    });
    this.scrollNextView();
  }

  navigateToGames() {
    this.router.navigate(['/games']);
    this.scrollNextView();
  }
}
