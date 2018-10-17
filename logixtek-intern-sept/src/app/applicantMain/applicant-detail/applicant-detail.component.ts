import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../applicant_data/applicant.model';
import { ApplicantService } from '../service/applicant.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';

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
          this.forArr.push(
            new Position(
              data[i].Id,
              data[i].Name
            )
          );
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
          this.stageArr.push(
            new Stage(
              data[i].Id,
              data[i].Name
            )
            );
          }
      },
      error => console.log(error)
    );
    // this.applicants = this.applicantService.getApplicants();
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

    // ==============================================
    if (mode === 'new') {
      // INIT  AND CHECK FOR NEW OR UPDATE
      // =============================================
      // Get Lasted Applicant id
      // this.applicants = this.applicantService.getApplicants();
      // this.len = this.applicants.length;
      // -> 0 if null len or maxlen.id +1
      // if (this.len === 0) {
      //   this.id = 1;
      //   console.log('init');
      // } else {
      //   this.id = this.applicants[this.len - 1].id;
      //   this.id += 1;
      // }
      this.id = this.applicantService.getId();
      // Create the new Applicant with lastest id for new
      this.formData = new Applicant(this.id, '', '', null, null, '', '', '', null);
      this.mode = true;
    } else {
      if (!isNaN(id)) {
        this.router.navigate(['/applicants', id], {
          queryParams: { allowEdit: '1' }
        });
        this.formData = this.applicantService.selectApplicant(id);
        if (this.formData == null) {
          // navigate to pagenote found
          this.router.navigate(['not-found']);
        }
        this.mode = false;
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
    const newApplicantData = {
      'Id': 0,
      'FirstName': value.name,
      'LastName': value.name,
      'ApplyforId': value.applyFor,
      'StageId': value.stage,
      'Email': value.email,
      'Phone': value.phone,
      'PhoneScreenInterviewer': value.psi,
      'PhoneScreenDate': value.psd,
      'Applyfor': null,
      'Stage': null
    };

    // this.applicantService.addApplicant(newApplicantData);
    // this.applicantService.storeOnLocalStorage(newApplicantData);
    this.applicantService.addApplicant(newApplicantData).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
    this.formSubmit.emit();
    event.preventDefault();
    this.router.navigate(['../']);
  }

  onSubmitApplicant(event: Event) {
    this.applicantService.updateApplicant(this.formData);
    this.formSubmit.emit();
    event.preventDefault();
    this.router.navigate(['../']);
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
}
