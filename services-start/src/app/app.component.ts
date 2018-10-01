import { Component, OnInit } from '@angular/core';
import { LoggingSerivce } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private loggingService: LoggingSerivce) {}
  ngOnInit() {
    this.accounts = this.loggingService.accounts;
  }
}
