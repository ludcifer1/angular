import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';
import * as moment from 'moment';
import { ApplicantRepository } from '../../repository/applicant.repository';
import { PositionRepository } from '../../repository/position.repository';
import { StageRepository } from '../../repository/stage.repository';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css'],
})
export class ApplicantDetailComponent implements OnInit {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  formData: Applicant;

  @Output()
  formSubmit = new EventEmitter<Applicant>();

  @Input()
  modeData: string;

  forArr: any[];
  stageArr: any[];
  nextId = 0;
  mode = true;
  id: number;
  len: number;
  applicants: Applicant[];
  applicantInit: Applicant;
  allowEdit = false;
  temp = null;

  private applicantLink: { id: number; name: string };
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    private appRep: ApplicantRepository,
    private posRep: PositionRepository,
    private stageRep: StageRepository,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // =============================================
    this.posRep.getPosition().subscribe(
      (data: any) => {
        this.forArr = [];
        // Extract and mapping received data
        for (let i = 0; i < data.length; i++) {
          this.forArr.push(new Position(data[i].Id, data[i].Name));
        }
      },
      error => console.log(error)
    );
    //
    this.stageRep.getStage().subscribe(
      (data: any) => {
        this.stageArr = [];
        // Extract and mapping received data
        for (let i = 0; i < data.length; i++) {
          this.stageArr.push(new Stage(data[i].Id, data[i].Name));
        }
      },
      error => console.log(error)
    );
    // =============================================

    // =============================================
    this.modeData = 'new';
    // check id is exist --> mode
    const id = +this.route.snapshot.params['id'];
    const mode = this.route.snapshot.params['id'];

    this.route.queryParams.subscribe((queryParam: Params) => {
      this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
    });
    this.formData = new Applicant(0, '', '', null, null, '', '', '', null);
    // ==============================================
    if (mode === 'new') {
      // Create the new Applicant with lastest id for new
      this.mode = true;
    } else {
      if (!isNaN(id)) {
        this.router.navigate(['/applicants', id], {
          queryParams: { allowEdit: '1' }
        });
        this.appRep.getApplicant(id).subscribe((data: any) => {
          this.formData = new Applicant(
            data.body.Id,
            data.body.FirstName,
            data.body.LastName,
            data.body.ApplyforId,
            data.body.StageId,
            data.body.Email,
            data.body.Phone,
            data.body.PhoneScreenInterviewer,
            this.formatDate(data.body.PhoneScreenDate)
          );
          console.log(this.formData);
          if (this.formData == null) {
            // navigate to pagenote found
            this.router.navigate(['not-found']);
          }
          // this.mode = false mean Edit mode enabled and active the Submit Edit button
          this.mode = false;
        });
      } else {
        this.router.navigate(['not-found']);
        this.mode = false;
      }
    }
    // =============================================

    // load applicant by id--> formData
  }
  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  onAddApplicant(form: NgForm, event: Event) {
    console.log('on Add applicant');
    const value = form.value;
    this.appRep.createApplicant(Applicant.toJson(value))
    .subscribe((data: any) => {
      this.router.navigate(['../']);
    });
    event.preventDefault();
  }

  onSubmitApplicant(form: NgForm, event: Event) {
    console.log('on Update applicant');
    const value = form.value;

    this.appRep
      .updateApplicant(Applicant.toJson(value), this.formData.getId)
      .subscribe((data: any) => {
          event.preventDefault();
          this.router.navigate(['../']);
        }
      );
  }

  onCancel(event: Event) {
    this.formSubmit.emit();
    event.preventDefault();
    this.modeData = 'new';
    this.router.navigate(['../']);
  }

  // ====================================================

  formatDate(time: any) {
    let tempDate;
    tempDate = moment(time).format('YYYY-MM-DD');
    return tempDate;
  }
}
