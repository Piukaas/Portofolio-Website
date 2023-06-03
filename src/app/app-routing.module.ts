import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { YearComponent } from './pages/projects/year.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '', pathMatch: 'full', component: ProjectsComponent },
      { path: 'projects', pathMatch: 'full', component: YearComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
