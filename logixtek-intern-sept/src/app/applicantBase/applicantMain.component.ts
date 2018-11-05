import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant_data/applicant.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicantRepository } from '../repository/applicant.repository';
import { StageRepository } from '../repository/stage.repository';
import { PositionRepository } from '../repository/position.repository';

@Component({
  selector: 'app-applicantMain',
  templateUrl: './applicantMain.component.html',
  styleUrls: ['./applicantMain.component.css'],
})
export class ApplicantMainComponent implements OnInit {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor() {}

  ngOnInit() {
  }
}
