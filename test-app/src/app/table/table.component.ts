import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userId: number=10;
  userStatus: string='ALIVE';

  getUserStatus(){
    if(this.userStatus==='ALIVE'){
      this.userStatus='not Alive';
    }
    return this.userStatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
