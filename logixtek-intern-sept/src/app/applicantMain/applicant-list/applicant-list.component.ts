import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';
import { ConfirmationDialogService } from '../../utils/confirmation-dialog/confirmation-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../service/backend.service';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';

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
  stages: Stage[];
  positions: Position[];
  nextId = 0;
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private applicantService: ApplicantService,
    private confirmationDialogService: ConfirmationDialogService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bakenS: BackendService
  ) {}

  ngOnInit() {
    this.loadApplicants();
  }


  private loadStages() {
    this.applicantService.getAllStage().subscribe(
      (data: any) => {
        this.stages = [];
        // Extract and mapping received data
        for (let i = 0; i < data.length; i++) {
          this.stages.push(
            new Stage(
              data[i].Id,
              data[i].Name
            )
          );
        }
      },
      error => console.log(error)
    );
  }

  private loadPositions() {
    this.applicantService.getAllAF().subscribe(
      (data: any) => {
        this.positions = [];
        // Extract and mapping received data
        for (let i = 0; i < data.length; i++) {
          this.positions.push(
            new Position(
              data[i].Id,
              data[i].Name
            )
          );
        }
      },
      error => console.log(error)
    );
  }

  private loadApplicants() {
    this.applicantService.getAll().subscribe(
      (data: any) => {
        console.log(data);

        this.applicants = [];
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
              data[i].Stage !== null ? new Stage(data[i].Stage.Id, data[i].Stage.Name) : null,
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
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }
}
