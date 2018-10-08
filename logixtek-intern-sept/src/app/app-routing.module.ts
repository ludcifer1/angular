import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from '../components/auth/login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'applicants', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
