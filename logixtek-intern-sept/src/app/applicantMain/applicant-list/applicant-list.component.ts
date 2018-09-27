import { Component, OnInit } from "@angular/core";
import { Applicant } from "../../applicant_data/applicant.model";

@Component({
  selector: "app-applicant-list",
  templateUrl: "./applicant-list.component.html",
  styleUrls: ["./applicant-list.component.css"]
})
export class ApplicantListComponent implements OnInit {
  applicants: Applicant[] = [];

  applicantTest = new Applicant(
    1,
    "Test 1",
    "Something",
    "Interviewing",
    "Testsubject@logixtek.com",
    "0111001100",
    "Mr A",
    "Mr B"
  );

  constructor() {}

  ngOnInit() {}

  onCreateApplicant() {
    this.applicants.push(this.applicantTest);
  }
}
