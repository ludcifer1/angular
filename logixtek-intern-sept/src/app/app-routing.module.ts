import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'applicants', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    component: PageNotFoundComponent
  }
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
