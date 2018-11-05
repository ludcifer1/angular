import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ApplicantMainComponent } from './applicantMain.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantItemComponent } from './applicant-list/applicant-item/applicant-item.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';

import { ConfirmationDialogComponent } from '../utils/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../utils/confirmation-dialog/confirmation-dialog.service';
import { HeaderComponent } from './header/header.component';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantRepository } from '../repository/applicant.repository';
import { StageRepository } from '../repository/stage.repository';
import { PositionRepository } from '../repository/position.repository';

@NgModule({
  declarations: [
    HeaderComponent,
    ApplicantMainComponent,
    ApplicantDetailComponent,
    ApplicantItemComponent,
    ApplicantListComponent,
    ConfirmationDialogComponent
  ],
  imports: [CommonModule, FormsModule, ApplicantRoutingModule],
  providers: [
    ConfirmationDialogService,
    ApplicantRepository,
    StageRepository,
    PositionRepository
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class ApplicantBaseModule {}
