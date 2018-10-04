import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant_data/applicant.model';
import { ApplicantService } from '../applicantMain/service/applicant.service';

@Component({
  selector: 'app-applicantMain',
  templateUrl: './applicantMain.component.html',
  styleUrls: ['./applicantMain.component.css'],
  providers: [ApplicantService]
})
export class ApplicantMainComponent implements OnInit {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  loadedFeature = 'List';
  applicantSelected: Applicant;
  formData: Applicant;
  modeData = 'new';
  id: number;
  len: number;
  applicants: Applicant[];
  setAlertStatus = '';
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
    // -> 0 if null len or maxlen.id +1
    if (this.len === 0) {
      this.id = 1;
      console.log('init');
    } else {
      this.id = this.applicants[this.len - 1].id;
      this.id += 1;
    }
    console.log('len:' + this.len);
    console.log('id ' + this.id);

    this.applicantSelected = new Applicant(this.id, '', '', '', '', '', '', '');
    this.modeData = 'new';
    this.loadedFeature = 'Detail';

  }
  onApplicantSelected(applicant: Applicant) {
    this.applicantSelected = applicant;
    this.modeData = 'edit';
    this.loadedFeature = 'Detail';
  }

  onApplicantDetailSubmit() {
    this.loadedFeature = 'List';
  }
}
