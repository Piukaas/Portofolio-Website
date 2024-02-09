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
    this.router.navigate(['/projects/category'], {
      queryParams: { type: 'Website' },
    });
    this.scrollNextView();
  }

  apiProjects() {
    this.router.navigate(['/projects/category'], {
      queryParams: { type: 'API' },
    });
    this.scrollNextView();
  }

  dataProjects() {
    this.router.navigate(['/projects/category'], {
      queryParams: { type: 'Data' },
    });
    this.scrollNextView();
  }

  appProjects() {
    this.router.navigate(['/projects/category'], {
      queryParams: { type: 'Mobile' },
    });
    this.scrollNextView();
  }

  gameProjects() {
    this.router.navigate(['/projects/category'], {
      queryParams: { type: 'Game' },
    });
    this.scrollNextView();
  }

  algorithmProjects() {
    this.router.navigate(['/projects/category'], {
      queryParams: { type: 'Algorithm' },
    });
    this.scrollNextView();
  }
}
