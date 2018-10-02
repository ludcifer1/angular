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
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {}

  // ================================================
  // =                EVENT SECTION                 =
  // ================================================

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onApplicantSelected(applicant: Applicant) {
    // this.applicantSelected = this.applicantService.selectApplicant(index);
    this.applicantSelected = applicant;
    console.log('Main', this.applicantSelected);
    // console.log('--------');
    // console.log(index);
    // console.log(this.applicantService.selectApplicant(index));
    // console.log('--------');
    // console.log('Applicant Selected from List: ', this.applicantSelected);
    this.modeData = 'edit';
    this.loadedFeature = 'Detail';

    // todo: set form status to edit
  }

  onAddApplicant(id: number) {
    this.applicantSelected = new Applicant(id + 1, '', '', '', '', '', '', '');
    this.modeData = 'new';
    this.loadedFeature = 'Detail';

    // todo: set form status to add new
  }

  onApplicantDetailSubmit() {
    this.loadedFeature = 'List';
  }
}
