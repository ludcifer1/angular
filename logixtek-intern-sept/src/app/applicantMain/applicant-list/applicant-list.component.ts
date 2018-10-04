import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';
import { ConfirmationDialogService } from '../../utils/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
  providers: [ApplicantService, ConfirmationDialogService]
})
export class ApplicantListComponent implements OnInit {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  @Output()
  applicantSelected = new EventEmitter<Applicant>();

  @Output()
  addApplicant = new EventEmitter<any>();

  @Input()
  newApplicantToList: Applicant;

  @Input()
  alertStatus: string;

  applicants: Applicant[] = [];
  nextId = 0;
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private applicantService: ApplicantService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicant();
    this.applicants = this.applicantService.getApplicants();
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  getApplicant(id: number, applicant: Applicant) {
    this.applicantSelected.emit(applicant);
  }

  onAddApplicant() {
    this.addApplicant.emit();
  }

  deleteApplicant(id: number) {
    this.confirmationDialogService
      .confirm(
        'Delete Confirmation',
        'Do you really want to delete Applicant with ID = ',
        id + ' '
      )
      .then(confirmed => {
        if (confirmed) {
          this.applicantService.deleteApplicant(id);
          // Reload the list
          this.applicants = this.applicantService.getApplicants();
          this.alertStatus = 'delete';
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

  onUpdateApplicant(id: number) {
    const tempApplicant = this.applicantService.selectApplicant(id);
    this.applicantSelected.emit(tempApplicant);
  }
}
