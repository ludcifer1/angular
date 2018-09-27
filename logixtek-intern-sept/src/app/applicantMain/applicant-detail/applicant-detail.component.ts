import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css'],
  providers: [ApplicantService]

})
export class ApplicantDetailComponent implements OnInit {
  applyForArr: string[];
  stageArr: string[];
  myApplicant: Applicant;


  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applyForArr = this.applicantService.applyForArr;
    this.stageArr = this.applicantService.stageArr;
  }

  onApplicantEdit(applicant: Applicant) {
    this.myApplicant = applicant;
    this.logOut(this.myApplicant);
  }
  logOut(applicant: Applicant) {
    console.log(applicant);
    // Stuck here

  }
}
