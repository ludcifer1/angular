import { Component, OnInit, Input } from "@angular/core";
import { Applicant } from "../../../applicant_data/applicant.model";


@Component({
  selector: "app-applicant-item",
  templateUrl: "./applicant-item.component.html",
  styleUrls: ["./applicant-item.component.css"]
})
export class ApplicantItemComponent implements OnInit {
  @Input() applicantData: Applicant;

  constructor() {}

  ngOnInit() {}
}
