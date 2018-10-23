import { Applicant } from '../../applicant_data/applicant.model';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { BackendService } from './backend.service';
import { map } from 'rxjs/operators';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';
import { BackendAFService } from './backend-ApplyFor.service';
import { BackendStageService } from './backend-Stage.service';


// ================================================
// =              ATTRIBUTES SECTION              =
// ================================================
const STORAGE_KEY = 'local_applicant_list';
@Injectable()
export class ApplicantService {
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private bakenS: BackendService,
    private bakenAF: BackendAFService,
    private bakenStage: BackendStageService,
  ) {}
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  tempApplicant: Applicant;

  // =================================================
  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================
  getAll() {
    // neu nhu sau nay can xu ly cai gi do  truoc khi do du lieu
    // thi lam nhu sau
    return this.bakenS.getAllApplicants()
            .pipe(
              map(
                (data) => {
                    // muon xu li gi cung duoc
                    // do something
                    // tra ve du lieu de nguoi khac nhan
                    return data;
                }
              )
            );
  }
  getAllStage() {
    return this.bakenStage.getAllStage()
      .pipe(
        map(
          (data) => {
            // muon xu li gi cung duoc
            // do something
            // tra ve du lieu de nguoi khac nhan
            return data;
          }
        )
      );
  }
  getAllAF() {
    return this.bakenAF.getAllApplyFor()
      .pipe(
        map(
          (data) => {
            // muon xu li gi cung duoc
            // do something
            // tra ve du lieu de nguoi khac nhan
            return data;
          }
        )
      );
  }
//
//
//
  addApplicant(applicant: any) {
    return this.bakenS.createApplicant(applicant)
      .pipe(
        map(
          (resp) => {
            if (resp.ok) {
              console.log('New Applicant is added successfully');
            } else {
              console.log('Add fail');
            }
            return resp;
          }
        )
      );
  }
  getApplicant(id: number) {
    return this.bakenS.getApplicant(id);
  }
  deleteApplicant(id: number) {
    return this.bakenS.deleteApplicant(id);
  }
  updateApplicant(applicant: any) {
    return this.bakenS.updateApplicant(applicant, applicant.Id);
  }
  // ================================================
}
