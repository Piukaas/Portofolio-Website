import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage-encrypt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { FooterComponent } from './core/footer/footer.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AllProjectsComponent } from './pages/allprojects/allprojects.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { CategoryProjectsComponent } from './pages/categoryprojects/category.component';
import { YearProjectsComponent } from './pages/yearprojects/yearprojects.component';
import { GamesComponent } from './pages/games/games.component';
import { RockComponent } from './pages/games/rockpaperscissors/rock.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
    ProjectsComponent,
    AllProjectsComponent,
    ProjectComponent,
    CategoryProjectsComponent,
    YearProjectsComponent,
    GamesComponent,
    RockComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LocalStorageModule.forRoot({
      prefix: '',
      storageType: 'localStorage',
      encryptionActive: true,
      encryptionOptions: {
        encryptionKey: 'secret',
        encryptionIv: '123',
        encryptionSalt: 'salty',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
