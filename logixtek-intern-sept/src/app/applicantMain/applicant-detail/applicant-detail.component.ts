
import { Component, OnInit, Input } from "@angular/core";
import { Applicant } from "../../applicant_data/applicant.model";
import { ApplicantService } from "../service/applicant.service";

@Component({
  selector: "app-applicant-detail",
  templateUrl: "./applicant-detail.component.html",
  styleUrls: ["./applicant-detail.component.css"],
  providers: [ApplicantService]
})
export class ApplicantDetailComponent implements OnInit {
  @Input()
  formData: Applicant = new Applicant();

  forArr: String[];
  stageArr: String[];

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.forArr = this.applicantService.applyForArr;
    this.stageArr = this.applicantService.stageArr;

  }

  // onApplicantEdit(applicant: Applicant) {
  //   console.log(applicant);
  //   console.log("Applicant edit");
  // }
}
