import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  hasNewUser = false;
  allowNewUser = false;
  userCreationStatus = "No New User";
  userName = "";
  users = ["User 1", "User 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 1000);
  }

  ngOnInit() {}

  onCreateUser() {
    this.hasNewUser = true;
    this.users.push(this.userName);
    this.userCreationStatus = "User Created Named: " + this.userName;
  }
  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  resetUserName() {
    this.userName = "";
    this.userCreationStatus = " Reseted";
  }
  onInputSelected() {
    this.userCreationStatus = "No New User";
  }
}
