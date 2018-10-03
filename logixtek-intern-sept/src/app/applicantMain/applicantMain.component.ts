import { Component, OnInit } from "@angular/core";
import { Applicant } from "../applicant_data/applicant.model";
import { ApplicantService } from "../applicantMain/service/applicant.service";

@Component({
  selector: "app-applicantMain",
  templateUrl: "./applicantMain.component.html",
  styleUrls: ["./applicantMain.component.css"],
  providers: [ApplicantService]
})
export class ApplicantMainComponent implements OnInit {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  loadedFeature = "List";
  applicantSelected: Applicant;
  formData: Applicant;
  modeData = "new";
  id: number;
  len: number;
  applicants: Applicant[];
  setAlertStatus = "";
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.applicants = this.applicantService.getApplicants();

    console.log(this.applicants.length);
  }

  // ================================================
  // =                EVENT SECTION                 =
  // ================================================

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  onAddApplicant() {
    // Get Lasted Applicant id
    this.applicants = this.applicantService.getApplicants();
    this.len = this.applicants.length;
    // console.log('id init' + this.id);
    // init id = 1 >> empty applicant list or +1 id for next Applicant
    if (this.len === 0) {
      this.id = 1;
      console.log("init");
    } else {
      this.id = this.applicants[this.len - 1].id;
      this.id += 1;
    }
    console.log("len:" + this.len);
    console.log("id " + this.id);

    this.applicantSelected = new Applicant(this.id, "", "", "", "", "", "", "");
    this.modeData = "new";
    this.loadedFeature = "Detail";

    // todo: set form status to add new
  }
  onApplicantSelected(applicant: Applicant) {
    // this.applicantSelected = this.applicantService.selectApplicant(index);
    this.applicantSelected = applicant;
    console.log("Main", this.applicantSelected);
    // console.log('--------');
    // console.log(index);
    // console.log(this.applicantService.selectApplicant(index));
    // console.log('--------');
    // console.log('Applicant Selected from List: ', this.applicantSelected);
    this.modeData = "edit";
    this.loadedFeature = "Detail";

    // todo: set form status to edit
  }

  onApplicantDetailSubmit() {
    console.log("update ne");
    this.loadedFeature = "List";
    // this.setAlertStatus = "update";
  }
}
