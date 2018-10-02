import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Applicant } from "../../applicant_data/applicant.model";
import { ApplicantService } from "../service/applicant.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-applicant-detail",
  templateUrl: "./applicant-detail.component.html",
  styleUrls: ["./applicant-detail.component.css"],
  providers: [ApplicantService]
})
export class ApplicantDetailComponent implements OnInit {
  @Input()
  formData: Applicant;

  @Output()
  formSubmit = new EventEmitter<Applicant>();

  @Input()
  modeData: string;

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
  onAddApplicant(id: number, form: NgForm, event: Event) {
    const value = form.value;
    const newApplicantData = new Applicant(
      (value.id = id),
      value.name,
      value.applyFor,
      value.stage,
      value.email,
      value.phone,
      value.psi,
      value.psd
    );
    // this.applicantService.addApplicant(newApplicantData);
      console.log(id, newApplicantData);

    this.applicantService.storeOnLocalStorage(newApplicantData);
    this.formSubmit.emit();
      console.log(this.applicantService.getApplicants);

    event.preventDefault();
  }
  onSubmitApplicant(event: Event) {
    this.applicantService.updateApplicant(this.formData);
    this.formSubmit.emit();
    event.preventDefault();
  }
  onCancel(event: Event) {
    this.formSubmit.emit();
    event.preventDefault();
  }
  checkMode() {
    if (this.modeData === "new") {
      return true;
    } else {
      return false;
    }
  }
}
