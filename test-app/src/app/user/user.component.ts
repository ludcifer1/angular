import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: [
    `
      .alive {
        font-weight: bold;
        font-size: 30px;
      }
    `
  ]
})
export class UserComponent {
  userName: String = "Lincoln";
  userStatus: String = "Live";
  

  constructor() {
    this.userStatus = Math.random() > 0.5 ? "Alive" : "Not Alive";
  }

  getUserStatus() {
    return this.userStatus;
  }
  getColor() {
    return this.userStatus === "Alive" ? "green" : "red";
  }

}
