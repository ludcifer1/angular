import { Component, OnInit } from "@angular/core";
import { Applicant } from "../applicant_data/applicant.model";

@Component({
  selector: "app-applicantMain",
  templateUrl: "./applicantMain.component.html",
  styleUrls: ["./applicantMain.component.css"]
})
export class ApplicantMainComponent implements OnInit {
  loadedFeature = "List";
  applicantSelected: Applicant;
  constructor() {}

  ngOnInit() {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onApplicantSelected(applicant: Applicant) {
    this.applicantSelected = applicant;
  }
}
