import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../guards/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  featureSelected = new EventEmitter<string>();
  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private loginService: LoginService) {}

  ngOnInit() {}

  toApplicant() {
    this.router.navigate(['applicants']);
  }

  toAdd() {
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }

  toLogout() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }
}
