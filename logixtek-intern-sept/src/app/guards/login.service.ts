import { reject } from 'q';
import { AdminService } from './adminstrator.service';
import { Injectable } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';

@Injectable()
export class LoginService {
  loggedIn = false;
  sessionKey = 'myLogin';

  constructor(
    private admService: AdminService,
    private cookieService: CookieService
  ) {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // fetch cookies
        // if cookies existed => loggedin = true
        // resolve true
        // else false
        const sessionUser = this.cookieService.get(this.sessionKey);
        if (sessionUser !== undefined || sessionUser !== null) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    // cookie del
    this.cookieService.remove(this.sessionKey);
    this.loggedIn = false;
  }

  isLoggedIn(username: string, password: string) {
    if (this.admService.isMatchedAdmin(username, password)) {
      // future complex process
      this.loggedIn = true;
      // put cookie
      this.cookieService.put(this.sessionKey, username);
      return true;
    } else {
      // future complex process
      return false;
    }
  }
}
