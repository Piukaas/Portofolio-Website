import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AllProjectsComponent } from './pages/allprojects/allprojects.component';
import { AppProjectsComponent } from './pages/appprojects/appprojects.component';
import { WebsiteProjectsComponent } from './pages/websiteprojects/websiteprojects.component';
import { APIProjectsComponent } from './pages/apiprojects/apiprojects.component';
import { DataProjectsComponent } from './pages/dataprojects/dataprojects.component';
import { GameProjectsComponent } from './pages/gameprojects/gameprojects.component';
import { AlgorithmProjectsComponent } from './pages/algorithmprojects/algorithmprojects.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '', component: ProjectsComponent },
      { path: 'projects', component: AllProjectsComponent },
      { path: 'projects/websites', component: WebsiteProjectsComponent },
      { path: 'projects/apis', component: APIProjectsComponent },
      { path: 'projects/data', component: DataProjectsComponent },
      { path: 'projects/apps', component: AppProjectsComponent },
      { path: 'projects/games', component: GameProjectsComponent },
      { path: 'projects/algorithms', component: AlgorithmProjectsComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
