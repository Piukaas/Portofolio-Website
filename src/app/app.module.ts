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
import { AlgorithmProjectsComponent } from './pages/algorithmprojects/algorithmprojects.component';
import { AllProjectsComponent } from './pages/allprojects/allprojects.component';
import { APIProjectsComponent } from './pages/apiprojects/apiprojects.component';
import { AppProjectsComponent } from './pages/appprojects/appprojects.component';
import { DataProjectsComponent } from './pages/dataprojects/dataprojects.component';
import { GameProjectsComponent } from './pages/gameprojects/gameprojects.component';
import { AIComponent } from './pages/projects/algorithms/ai/ai.component';
import { SamenEtenComponent } from './pages/projects/apis/sameneten/sameneten.component';
import { SolutionComponent } from './pages/projects/apis/solution/solution.component';
import { BreakingBadComponent } from './pages/projects/apps/breakingbad/breakingbad.component';
import { DavideTheatreComponent } from './pages/projects/apps/davidetheatre/davidetheatre.component';
import { SeekingSafetyComponent } from './pages/projects/apps/seekingsafety/seekingsafety.component';
import { DataScienceComponent } from './pages/projects/data/datascience/datascience.component';
import { KramseComponent } from './pages/projects/data/kramse/kramse.component';
import { GameJamComponent } from './pages/projects/games/game-jam/jam.component';
import { GhostComponent } from './pages/projects/games/ghost-runner/ghost.component';
import { MazeComponent } from './pages/projects/games/guarded-maze/maze.component';
import { BallComponent } from './pages/projects/games/roll-a-ball/ball.component';
import { SeriousGameComponent } from './pages/projects/games/serious-game/serious.component';
import { ShapeComponent } from './pages/projects/games/shape-shooter/shape.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ClientComponent } from './pages/projects/websites/client/client.component';
import { ClockbusterComponent } from './pages/projects/websites/clockbuster/clockbuster.component';
import { CMComComponent } from './pages/projects/websites/cmcom/cmcom.component';
import { PortfolioComponent } from './pages/projects/websites/portfolio/portfolio.component';
import { ServerComponent } from './pages/projects/websites/server/server.component';
import { TheCircleComponent } from './pages/projects/websites/thecircle/thecircle.component';
import { WebsiteProjectsComponent } from './pages/websiteprojects/websiteprojects.component';

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
    WebsiteProjectsComponent,
    APIProjectsComponent,
    DataProjectsComponent,
    GameProjectsComponent,
    AlgorithmProjectsComponent,
    AIComponent,
    SolutionComponent,
    BallComponent,
    MazeComponent,
    GhostComponent,
    ShapeComponent,
    GameJamComponent,
    SeriousGameComponent,
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
