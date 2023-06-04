import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  @ViewChild('nextView', { static: true })
  nextViewRef!: ElementRef;

  constructor(private router: Router) {}

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

  websiteProjects() {
    this.router.navigate(['/projects/websites']);
    this.scrollNextView();
  }

  apiProjects() {
    this.router.navigate(['/projects/apis']);
    this.scrollNextView();
  }

  dataProjects() {
    this.router.navigate(['/projects/data']);
    this.scrollNextView();
  }

  appProjects() {
    this.router.navigate(['/projects/apps']);
    this.scrollNextView();
  }

  gameProjects() {
    this.router.navigate(['/projects/games']);
    this.scrollNextView();
  }

  algorithmProjects() {
    this.router.navigate(['/projects/algorithms']);
    this.scrollNextView();
  }
}
