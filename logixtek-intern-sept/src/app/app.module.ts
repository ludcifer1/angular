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
import { ConfirmationDialogComponent } from './utils/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './utils/confirmation-dialog/confirmation-dialog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplicantMainComponent,
    ApplicantListComponent,
    ApplicantItemComponent,
    ApplicantDetailComponent,
    ConfirmationDialogComponent
  ],
  imports: [BrowserModule, FormsModule, StorageServiceModule, NgbModule.forRoot()],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule {}
