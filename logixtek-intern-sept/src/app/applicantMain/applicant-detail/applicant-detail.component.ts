import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';
import * as moment from 'moment';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css'],
  providers: [ApplicantService]
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
    private applicantService: ApplicantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // =============================================
    this.applicantService.getAllAF().subscribe(
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
    this.applicantService.getAllStage().subscribe(
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
    this.route.params.subscribe((params: Params) => {
      this.formData = this.applicantService.selectApplicant(+params['id']);
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
        this.applicantService.getApplicant(id).subscribe((data: any) => {
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

    this.applicantService
      .addApplicant(Applicant.toJson(value))
      .subscribe((data: any) => {
        // sau khi add
        this.router.navigate(['../']);
      });

    event.preventDefault();
  }

  onSubmitApplicant(form: NgForm, event: Event) {
    console.log('on Update applicant');
    const value = form.value;

    this.applicantService
      .updateApplicant(Applicant.toJson(value, this.formData.getId))
      .subscribe((data: any) => {
        event.preventDefault();
        this.router.navigate(['../']);
      });
  }

  onCancel(event: Event) {
    this.formSubmit.emit();
    event.preventDefault();
    this.modeData = 'new';
    this.router.navigate(['../']);
  }
  // checkMode() {
  //   if (this.modeData === 'new') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // ====================================================

  formatDate(time: any) {
    let tempDate: String;
    tempDate = moment(time).format('YYYY-MM-DD');
    // return (tempDate.getFullYear() + '-' + tempDate.getMonth() + '-' + tempDate.getDay());
    return tempDate;
  }
}
