import { Component, OnInit } from '@angular/core';
import { UserService } from './userService.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  constructor(private UserService: UserService) {
    // this.UserService.toActive.subscribe((id: number) => {
    //   this.UserService.setToActive(id);
    // });

    // this.UserService.toInActive.subscribe((id: number) => {
    //   this.UserService.setToInactive(id);
    // });

    this.UserService.toDo.subscribe((data: any) => {
      if (data.toActive) {
        this.UserService.setToActive(data.id);
      } else {
        this.UserService.setToInactive(data.id);
      }
    });
  }
  ngOnInit() {
    this.activeUsers = this.UserService.activeUsers;
    this.inactiveUsers = this.UserService.inactiveUsers;
  }
  // onSetToInactive(id: number) {
  //   // this.inactiveUsers.push(this.activeUsers[id]);
  //   // this.activeUsers.splice(id, 1);
  //   console.log('main' + id);
  //   this.UserService.setToInactive(id);
  // }

  // onSetToActive(id: number) {
  //   // this.activeUsers.push(this.inactiveUsers[id]);
  //   // this.inactiveUsers.splice(id, 1);
  //   this.UserService.setToActive(id);
  // }
}
