import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { HeaderComponent } from './applicantBase/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicantMainComponent } from './applicantBase/applicantMain.component';
import { ApplicantListComponent } from './applicantBase/applicant-list/applicant-list.component';
import { ApplicantItemComponent } from './applicantBase/applicant-list/applicant-item/applicant-item.component';
import { ApplicantDetailComponent } from './applicantBase/applicant-detail/applicant-detail.component';
import { ConfirmationDialogComponent } from './utils/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './utils/confirmation-dialog/confirmation-dialog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicantRoutingModule } from './applicantBase/applicant-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { AuthGuard } from './guards/auth.guard.service';
import { CookieModule, CookieService } from 'ngx-cookie';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/auth.interceptor';
import { BaseService } from './service/base.service';
import { LoggingInterceptor } from './service/logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplicantMainComponent,
    ApplicantListComponent,
    ApplicantItemComponent,
    ApplicantDetailComponent,
    ConfirmationDialogComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ApplicantRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [
    ConfirmationDialogService,
    LoginService,
    AuthGuard,
    CookieService,
    BaseService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule {}
