import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Applicant } from "../../applicant_data/applicant.model";
import { ApplicantService } from "../service/applicant.service";
@Component({
  selector: "app-applicant-list",
  templateUrl: "./applicant-list.component.html",
  styleUrls: ["./applicant-list.component.css"],
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

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicant();
    this.applicants = this.applicantService.getApplicant();
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  // Edit Applicant
  getApplicant(id: number, applicant: Applicant) {
    this.applicantSelected.emit(applicant);
  }

  onAddApplicant() {
    this.addApplicant.emit();
  }
}
