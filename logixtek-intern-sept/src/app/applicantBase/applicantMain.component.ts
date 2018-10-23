import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant_data/applicant.model';
import { ApplicantService } from '../applicantBase/service/applicant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from './service/backend.service';
import { BackendAFService } from './service/backend-ApplyFor.service';
import { BackendStageService } from './service/backend-Stage.service';

@Component({
  selector: 'app-applicantMain',
  templateUrl: './applicantMain.component.html',
  styleUrls: ['./applicantMain.component.css'],
  providers: [ApplicantService, BackendService, BackendAFService, BackendStageService]
})
export class ApplicantMainComponent implements OnInit {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private applicantService: ApplicantService,
    private bakenS: BackendService
  ) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicants();
  }

}
