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
  @Output()
  applicantSelected = new EventEmitter<Applicant>();

  @Output()
  addApplicant = new EventEmitter<any>();

  @Input()
  newApplicantToList: Applicant;

  @Input()
  alertStatus: string;

  // applicantTest = new Applicant(
  //   'Test 1',
  //   'Something',
  //   'Interviewing',
  //   'Testsubject@logixtek.com',
  //   '0111001100',
  //   'Mr A',
  //   'Mr B'
  // );
  applicants: Applicant[] = [];
  nextId = 0;

  constructor(
    private applicantService: ApplicantService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicant();
    this.applicants = this.applicantService.getApplicants();
    console.log(this.alertStatus);
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  // Edit Applicant
  getApplicant(id: number, applicant: Applicant) {
    this.applicantSelected.emit(applicant);
  }

  onAddApplicant() {
    // if (this.applicants[0] === undefined) {
    //   nextId = 1;
    //   console.log('if here');
    // } else if (
    //   nextId === this.applicants[nextId - 1].id &&
    //   nextId === this.applicants[nextId].id
    // ) {
    //   console.log('else here');
    //   nextId += 1;
    // }
    this.addApplicant.emit();
  }

  deleteApplicant(index: number) {
    this.confirmationDialogService
      .confirm(
        'Delete Confirmation',
        'Do you really want to delete Applicant with ID = ',
        this.applicants[index - 1].id + ' '
      )
      .then(confirmed => {
        if (confirmed) {
          this.applicantService.deleteApplicant(index);
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

  onUpdateApplicant(index: number) {
    const tempApplicant = this.applicantService.selectApplicant(index);
    this.applicantSelected.emit(tempApplicant);
  }
}
