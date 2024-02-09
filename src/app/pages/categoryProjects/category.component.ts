import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'category-projects',
  templateUrl: './category.component.html',
})
export class CategoryProjectsComponent implements OnInit {
  projects$: Observable<any> = of();
  type: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.type = params['type'];

      this.projects$ = this.http.get('assets/json/projects.json').pipe(
        switchMap((projects: any) => projects),
        filter((project: any) => project.projectType === this.type),
        toArray()
      );
    });
  }
}
