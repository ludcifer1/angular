import { Adminstrator } from '../applicant_data/adminstrator.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  adminList: Adminstrator[] = [
    new Adminstrator('admin', 'admin'),
    new Adminstrator('123', '123')
  ];
  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================
  isMatchedAdmin(username: string, password: string) {
    let bool;
    for (let i = 0; i < this.adminList.length; i++) {
      const admUName = this.adminList[i].username;
      const admPw = this.adminList[i].password;
      console.log(this.adminList[i]);
      if (username === admUName && password === admPw) {
        bool = true;
        return bool;
      } else {
        bool = false;
      }
    }
    return bool;

  }

  // isMatchedAdmin(username: string, password: string) {
  //   if (username === 'admin' && password === 'admin') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
