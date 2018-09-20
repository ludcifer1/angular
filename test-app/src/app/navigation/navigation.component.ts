import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

allowNewUser = false;

constructor() {
  setTimeout(function () { this.allowNewUser = true; console.log(this.allowNewUser); }, 2000);
}

ngOnInit() {
}
}
