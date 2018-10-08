import { ApplicantMainComponent } from './applicantMain.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantItemComponent } from './applicant-list/applicant-item/applicant-item.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';


const appRoutes: Routes = [
  { path: 'applicants',
    component: ApplicantMainComponent,
    children: [{
        path: '',
        component: ApplicantListComponent,
    },
    {
      path: ':id',
      component: ApplicantDetailComponent,
    },
    {
      path: 'new',
      component: ApplicantDetailComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class ApplicantRoutingModule { }
