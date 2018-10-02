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
  nextId = 0;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicant();
    this.applicants = this.applicantService.getApplicants();
    console.log(this.applicants);
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  // Edit Applicant
  getApplicant(id: number, applicant: Applicant) {
    this.applicantSelected.emit(applicant);
  }

  onAddApplicant() {
    // if (this.applicants[0] === undefined) {
    //   nextId = 1;
    //   console.log('if here');
    // } else if (
    //   nextId === this.applicants[nextId - 1].id &&
    //   nextId === this.applicants[nextId].id
    // ) {
    //   console.log('else here');
    //   nextId += 1;
    // }
    this.addApplicant.emit();
  }

  deleteApplicant(index: number) {
    this.applicantService.deleteApplicant(index);
    // Reload the list
    this.applicants = this.applicantService.getApplicants();
  }

  onUpdateApplicant(index: number) {
    const tempApplicant = this.applicantService.selectApplicant(index);
    tempApplicant.id = index;
    this.applicantSelected.emit(tempApplicant);
  }
}
