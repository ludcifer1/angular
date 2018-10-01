import { Component, } from '@angular/core';
import { LoggingSerivce } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingSerivce) {
    this.loggingService.statusUpdate.subscribe(
      (status: string) => alert('Status Update: ' + status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.addAcoount(accountName, accountStatus);
  }
}
