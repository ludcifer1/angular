import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ConfirmationDialogService } from '../../utils/confirmation-dialog/confirmation-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { ApplicantRepository } from '../../repository/applicant.repository';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';
import { ApplicantRepository } from '../../repository/applicant.repository';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
  providers: [ ConfirmationDialogService]
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
  applicants: Array<Applicant> = new Array<Applicant>();
  stages: Stage[];
  positions: Position[];
  nextId = 0;
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private appRepo: ApplicantRepository,
    private confirmationDialogService: ConfirmationDialogService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadApplicants();
  }
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  private loadApplicants() {
    this.appRepo.getAllApplicants().subscribe(
      (data: any) => {
        console.log(data);

        this.applicants.splice(0, this.applicants.length);
        // Extract and mapping received data
        // this.applicants = data;
        console.log('get data to applicants successful');
        for (let i = 0; i < data.length; i++) {
          this.applicants.push(
            new Applicant(
              data[i].Id,
              data[i].FirstName,
              data[i].LastName,
              new Position(data[i].Applyfor.Id, data[i].Applyfor.Name),
              data[i].Stage !== null
                ? new Stage(data[i].Stage.Id, data[i].Stage.Name)
                : null,
              data[i].Email,
              data[i].Phone,
              data[i].PhoneScreenInterviewer,
              new Date(data[i].PhoneScreenDate)
            )
          );
        }
      },
      error => console.log(error)
    );
  }

  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  addApplicant() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }
  updateApplicant(id: number) {
    let tempApp;
    this.appRepo.getApplicant(id).subscribe((data: any) => {
      tempApp = data.body;
      // router here
      console.log('check 1: id', id);
      console.log('check 2: tempApp', tempApp);
      this.router.navigate([id], { relativeTo: this.activeRoute });
      this.applicantSelected.emit(tempApp);
    });
  }
  getApplicant(applicant: Applicant) {
    this.applicantSelected.emit(applicant);
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
          // this.applicantService.deleteApplicant(id).subscribe((data: any) => {
          //   this.loadApplicants();
          //   this.alertStatus = 'delete';
          // });
          this.appRepo.deleteApplicant(id).subscribe((data: any) => {
            this.loadApplicants();
            this.alertStatus = 'delete';
          });
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
}
