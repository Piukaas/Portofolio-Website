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
