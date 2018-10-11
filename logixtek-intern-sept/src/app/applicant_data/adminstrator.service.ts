import { Adminstrator } from './adminstrator.model';
import { Injectable } from '@angular/core';

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
    for (let i = 0; i < this.adminList.length; i++) {
         const admUName = this.adminList[i].username;
         const admPw = this.adminList[i].password;
         if ((username === admUName) && (password === admPw)) {
           return true;
         } else { return false; }
    }
  }
}
