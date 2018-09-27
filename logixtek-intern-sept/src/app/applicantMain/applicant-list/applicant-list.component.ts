import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';
@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
  providers: [ApplicantService]
})
export class ApplicantListComponent implements OnInit {
  @Output()
  featureSelected = new EventEmitter<string>();

  @Output()
  applicantSelected = new EventEmitter<Applicant>();

  applicantTest = new Applicant(
    'Test 1',
    'Something',
    'Interviewing',
    'Testsubject@logixtek.com',
    '0111001100',
    'Mr A',
    'Mr B'
  );
  applicants: Applicant[] = [];

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.applicants = this.applicantService.applicants;
    console.log(this.applicantService.applicants);
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  onCreateApplicant(feature: string) {
    // Navigate to Applicant Detail
    this.featureSelected.emit(feature);
  }

  // Edit Applicant
  getApplicant(id: number, applicant: Applicant) {
    console.log(applicant);
    this.onCreateApplicant('Detail');
    this.applicantSelected.emit(applicant);
  }
}
