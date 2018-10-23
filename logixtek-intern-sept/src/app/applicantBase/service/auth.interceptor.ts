import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from '../../guards/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private LoginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.LoginService.sessionUser !== null &&
      this.LoginService.sessionUser !== undefined
    ) {
      const cloneereq = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + this.LoginService.sessionUser.token
        )
      });

      return next.handle(cloneereq);
    }
    return next.handle(req);
  }
}
