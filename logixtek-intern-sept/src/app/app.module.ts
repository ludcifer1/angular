import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ApplicantBaseModule } from './applicantBase/applicantBase.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ApplicantBaseModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CookieModule.forRoot(),
  ],
  providers: [
    LoginService,
    AuthGuard,
    CookieService,
    BaseService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
