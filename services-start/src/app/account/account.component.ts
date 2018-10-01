import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingSerivce } from '../logging.service';
import { stat } from 'fs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input()
  account: { name: string; status: string };
  @Input()
  id: number;

  constructor(private loggingService: LoggingSerivce) {}

  onSetTo(status: string) {
    this.loggingService.updateStatus(this.id, status);
    this.loggingService.statusUpdate.emit(status);
}
