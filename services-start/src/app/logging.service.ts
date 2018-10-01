import { EventEmitter } from '@angular/core';




export class LoggingSerivce {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  accounts = [
    { name: 'Master Account', status: 'active' },
    { name: 'Testaccount', status: 'inactive' },
    { name: 'Hidden Account', status: 'unknown' }
  ];

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================
  statusUpdate = new EventEmitter<string>();



  addAcoount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logStatusChange(status);
  }

  logStatusChange(accountStatus: string) {
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
