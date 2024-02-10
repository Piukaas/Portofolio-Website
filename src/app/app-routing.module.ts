import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AllProjectsComponent } from './pages/allprojects/allprojects.component';
import { CategoryProjectsComponent } from './pages/categoryprojects/category.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '', component: ProjectsComponent },
      { path: 'games', component: GamesComponent },
      { path: 'projects', component: AllProjectsComponent },
      { path: 'projects/category', component: CategoryProjectsComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
