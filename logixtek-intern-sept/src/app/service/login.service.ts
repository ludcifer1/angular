import { reject } from 'q';
import { Injectable } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  loggedIn = false;
  sessionKey = 'myLogin';
  loginUrl = 'https://applicantapi.azurewebsites.net/';
  sessionUser;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {

      if (this.cookieService.get(this.sessionKey) !== undefined) {
        this.sessionUser = JSON.parse(this.cookieService.get(this.sessionKey));
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
      resolve(this.loggedIn);
    });
    return promise;
  }

  logOut() {
    this.cookieService.remove(this.sessionKey);
    this.loggedIn = false;
    this.sessionUser = null;
  }

  logIn(email: string, password: string) {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', email)
      .set('password', password);
    return this.http
      .post(this.loginUrl + 'token', body.toString(), {
        observe: 'response',
        headers: new HttpHeaders().append(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      })
      .pipe(
        map(resp => {
          if (resp.ok) {
            // save to cookies
            const tempUserData = {
              username: resp.body['userName'],
              token: resp.body['access_token']
            };
            this.cookieService.put(
              this.sessionKey,
              JSON.stringify(tempUserData)
            );
            // update login status
            this.loggedIn = true;
          }
          return resp;
        })
      );
  }
}
