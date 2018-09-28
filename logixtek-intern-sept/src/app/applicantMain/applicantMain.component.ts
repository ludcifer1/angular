import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant_data/applicant.model';

@Component({
  selector: 'app-applicantMain',
  templateUrl: './applicantMain.component.html',
  styleUrls: ['./applicantMain.component.css']
})
export class ApplicantMainComponent implements OnInit {

  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  loadedFeature = 'List';
  applicantSelected: Applicant;

  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor() {}

  ngOnInit() {}


  // ================================================
  // =                EVENT SECTION                 =
  // ================================================

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onApplicantSelected(applicant: Applicant) {
    this.applicantSelected = applicant;
    this.loadedFeature = 'Detail';

    // todo: set form status to edit
  }

  onAddApplicant() {
    this.applicantSelected = new Applicant('', '', '', '', '', '', '');
    this.loadedFeature = 'Detail';

    // todo: set form status to add new
  }


  onApplicantDetailSubmit() {
    this.loadedFeature = 'List';
  }
}
