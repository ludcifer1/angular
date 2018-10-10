import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../../applicant_data/applicant.model';
import { ApplicantService } from '../../service/applicant.service';
import { ConfirmationDialogService } from '../../../utils/confirmation-dialog/confirmation-dialog.service';
@Component({
  selector: '[app-applicant-item]',
  templateUrl: './applicant-item.component.html',
  styleUrls: ['./applicant-item.component.css'],
  providers: [ApplicantService, ConfirmationDialogService]
})
export class ApplicantItemComponent implements OnInit {
  applicants: Applicant[] = [];

  @Input()
  applicantItem: Applicant;

  @Output()
  selectedDelete = new EventEmitter<number>();

  @Output()
  selectedUpdate = new EventEmitter<number>();

  constructor(
    private applicantService: ApplicantService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit() {}
  updateClicked(id: number) {
    this.selectedUpdate.emit(this.applicantService.selectApplicant(id).id);
  }
  deleteClicked(id: number) {
    this.selectedDelete.emit(this.applicantService.selectApplicant(id).id);
  }

}
