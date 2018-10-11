import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {LoginService} from '../guards/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {}

  ngOnInit() {

  }
  onLoggingIn(form: NgForm, event: Event) {
    const value = form.value;
    this.username = value.username;
    this.password = value.password;
    if (this.loginService.isLoggedIn(this.username, this.password)) {
      this.router.navigate(['applicants']);
    } else {
    this.router.navigate(['login']);
    // wrong message
    }
  }

}
