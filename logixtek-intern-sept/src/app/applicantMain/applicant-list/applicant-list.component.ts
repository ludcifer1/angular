import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  applicantSelected = new EventEmitter<Applicant>();

  @Output()
  addApplicant = new EventEmitter<any>();

  @Input()
  newApplicantToList: Applicant;

  // applicantTest = new Applicant(
  //   'Test 1',
  //   'Something',
  //   'Interviewing',
  //   'Testsubject@logixtek.com',
  //   '0111001100',
  //   'Mr A',
  //   'Mr B'
  // );
  applicants: Applicant[] = [];
  applicantsLength: number;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicant();
    this.applicants = this.applicantService.getApplicants();
    console.log('list lenght');
    console.log(this.applicants.length);
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  // Edit Applicant
  getApplicant(id: number, applicant: Applicant) {
    console.log(id, applicant);

    this.applicantSelected.emit(applicant);
  }

  onAddApplicant() {
    const nextId = this.applicants.length;
    console.log('id: ' + nextId);

    this.addApplicant.emit(nextId);
    console.log('list' + nextId);
  }

  deleteApplicant(index: number) {
    this.applicantService.deleteApplicant(index);
    // Reload the list
    this.applicants = this.applicantService.getApplicants();
  }

  onUpdateApplicant(index: number) {
    console.log('update runnin ', index);
    const tempApplicant = this.applicantService.selectApplicant(index);
    tempApplicant.id = index;
    console.log(tempApplicant);
    this.applicantSelected.emit(tempApplicant);
  }
}
