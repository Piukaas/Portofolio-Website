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
import { AppProjectsComponent } from './pages/appprojects/appprojects.component';
import { SamenEtenComponent } from './pages/projects/apis/sameneten/sameneten.component';
import { BreakingBadComponent } from './pages/projects/apps/breakingbad/breakingbad.component';
import { DavideTheatreComponent } from './pages/projects/apps/davidetheatre/davidetheatre.component';
import { SeekingSafetyComponent } from './pages/projects/apps/seekingsafety/seekingsafety.component';
import { DataScienceComponent } from './pages/projects/data/datascience/datascience.component';
import { KramseComponent } from './pages/projects/data/kramse/kramse.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ClientComponent } from './pages/projects/websites/client/client.component';
import { ClockbusterComponent } from './pages/projects/websites/clockbuster/clockbuster.component';
import { CMComComponent } from './pages/projects/websites/cmcom/cmcom.component';
import { PortfolioComponent } from './pages/projects/websites/portfolio/portfolio.component';
import { ServerComponent } from './pages/projects/websites/server/server.component';
import { TheCircleComponent } from './pages/projects/websites/thecircle/thecircle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
    ProjectsComponent,
    AllProjectsComponent,
    PortfolioComponent,
    TheCircleComponent,
    DataScienceComponent,
    KramseComponent,
    CMComComponent,
    ClientComponent,
    ServerComponent,
    SeekingSafetyComponent,
    SamenEtenComponent,
    DavideTheatreComponent,
    BreakingBadComponent,
    ClockbusterComponent,
    AppProjectsComponent,
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
