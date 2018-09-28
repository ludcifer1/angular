import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { HeaderComponent } from './applicantMain/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicantMainComponent } from './applicantMain/applicantMain.component';
import { ApplicantListComponent } from './applicantMain/applicant-list/applicant-list.component';
import { ApplicantItemComponent } from './applicantMain/applicant-list/applicant-item/applicant-item.component';
import { ApplicantDetailComponent } from './applicantMain/applicant-detail/applicant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplicantMainComponent,
    ApplicantListComponent,
    ApplicantItemComponent,
    ApplicantDetailComponent
  ],
  imports: [BrowserModule, FormsModule, StorageServiceModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
