import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../../applicant_data/applicant.model';
import { ConfirmationDialogService } from '../../../utils/confirmation-dialog/confirmation-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: '[app-applicant-item]',
  templateUrl: './applicant-item.component.html',
  styleUrls: ['./applicant-item.component.css'],
  providers: [ConfirmationDialogService]
})
export class ApplicantItemComponent implements OnInit {

  @Input()
  applicantItem: Applicant;

  @Output()
  selectedDelete = new EventEmitter<number>();

  @Output()
  selectedUpdate = new EventEmitter<number>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationDialogService: ConfirmationDialogService
  ) {
  }

  ngOnInit() {}
  updateClicked(id: number) {
    this.selectedUpdate.emit(id);
  }
  deleteClicked(id: number) {
    this.selectedDelete.emit(id);
  }

}
