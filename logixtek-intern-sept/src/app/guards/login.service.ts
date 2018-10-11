import { reject } from 'q';
import { AdminService } from '../applicant_data/adminstrator.service';

export class LoginService {
  loggedIn = false;

  constructor(private admService: AdminService) {}

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }

  isLoggedIn(username: string, password: string) {
    if (this.admService.isMatchedAdmin(username, password)) {
      // future complex process
      this.loggedIn = true;
      return true;
    } else {
      // future complex process
      return false;
    }
  }
}
