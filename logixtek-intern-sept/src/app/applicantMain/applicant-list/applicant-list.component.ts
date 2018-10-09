import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';
import { ConfirmationDialogService } from '../../utils/confirmation-dialog/confirmation-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  // @Output()
  // addApplicant = new EventEmitter<any>();

  @Input()
  newApplicantToList: Applicant;

  @Input()
  alertStatus: string;
  /////////////////////////////////////////////////////
  id: number;
  len: number;
  applicants: Applicant[];
  nextId = 0;
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private applicantService: ApplicantService,
    private confirmationDialogService: ConfirmationDialogService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.applicants = this.applicantService.getApplicant();
    this.applicants = this.applicantService.getApplicants();
    console.log('List: ' + this.applicants);
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  getApplicant(applicant: Applicant) {
    this.applicantSelected.emit(applicant);
  }

  // onAddApplicant() {
  //   this.addApplicant.emit();
  // }

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
  updateApplicant(id: number) {
    console.log('im running');
    const tempApp = this.applicantService.selectApplicant(id);
    // router here
    this.router.navigate([id], { relativeTo: this.activeRoute });
    this.applicantSelected.emit(tempApp);
  }

  onUpdateApplicant(id: number) {
    console.log('im runnig boss');
    const tempApplicant = this.applicantService.selectApplicant(id);
    this.applicantSelected.emit(tempApplicant);
  }
  /////////////////////////////////////////////////////////////////////////
  addApplicant() {
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }
}
