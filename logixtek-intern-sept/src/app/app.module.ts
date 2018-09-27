import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ApplicantMainComponent } from "./applicantMain/applicantMain.component";
import { ApplicantListComponent } from "./applicantMain/applicant-list/applicant-list.component";
import { ApplicantItemComponent } from "./applicantMain/applicant-list/applicant-item/applicant-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplicantMainComponent,
    ApplicantListComponent,
    ApplicantItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
