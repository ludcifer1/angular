import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  allowNewUser = false;
  userCreationStatus = 'No new User';
  userName='';

  constructor() {
    // var self = this;
    setTimeout(() => {
      console.log(this);
      this.allowNewUser = true;
      console.log(this.allowNewUser);
    }
      , 2000);
  }

  ngOnInit() {
  }
  onCreateUser() {
    this.userCreationStatus = 'New User Created '+ this.userName;
  }
  onUpdateUserName(event: Event) {
    this.userName=(<HTMLInputElement>event.target).value;
    this.userName = event.target.value;
  }
}
