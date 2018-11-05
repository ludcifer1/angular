import { ApplicantMainComponent } from './applicantMain.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantItemComponent } from './applicant-list/applicant-item/applicant-item.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { PageNotFoundComponent } from '../utils/page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth.guard.service';

const applicantRoutes: Routes = [
  {
    path: 'applicants',
    component: ApplicantMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ApplicantListComponent
      },
      {
        path: ':id',
        component: ApplicantDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(applicantRoutes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule {}
