import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AllProjectsComponent } from './pages/allprojects/allprojects.component';
import { AppProjectsComponent } from './pages/appprojects/appprojects.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '', component: ProjectsComponent },
      { path: 'projects', component: AllProjectsComponent },
      {
        path: 'projects/apps',
        component: AppProjectsComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
