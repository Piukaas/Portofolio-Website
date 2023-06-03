import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LocalStorageModule } from "angular-2-local-storage-encrypt";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./core/app/app.component";
import { DashboardComponent } from "./core/app/dashboard/dashboard.component";
import { FooterComponent } from "./core/app/footer/footer.component";
import { SamenEtenComponent } from "./core/app/projects/apis/sameneten/sameneten.component";
import { BreakingBadComponent } from "./core/app/projects/apps/breakingbad/breakingbad.component";
import { DavideTheatreComponent } from "./core/app/projects/apps/davidetheatre/davidetheatre.component";
import { SeekingSafetyComponent } from "./core/app/projects/apps/seekingsafety/seekingsafety.component";
import { DataScienceComponent } from "./core/app/projects/data/datascience/datascience.component";
import { KramseComponent } from "./core/app/projects/data/kramse/kramse.component";
import { ProjectsComponent } from "./core/app/projects/projects.component";
import { ClientComponent } from "./core/app/projects/websites/client/client.component";
import { ClockbusterComponent } from "./core/app/projects/websites/clockbuster/clockbuster.component";
import { CMComComponent } from "./core/app/projects/websites/cmcom/cmcom.component";
import { PortfolioComponent } from "./core/app/projects/websites/portfolio/portfolio.component";
import { ServerComponent } from "./core/app/projects/websites/server/server.component";
import { TheCircleComponent } from "./core/app/projects/websites/thecircle/thecircle.component";
import { YearComponent } from "./core/app/projects/year.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    FooterComponent,
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
    YearComponent,
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
      prefix: "",
      storageType: "localStorage",
      encryptionActive: true,
      encryptionOptions: {
        encryptionKey: "secret",
        encryptionIv: "123",
        encryptionSalt: "salty",
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
