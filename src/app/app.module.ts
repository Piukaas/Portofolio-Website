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
import { ProjectsComponent } from "./core/app/projects/projects.component";
import { FooterComponent } from "./core/app/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    FooterComponent,
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
