import { Applicant } from '../../applicant_data/applicant.model';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { BackendService } from './backend.service';
import { map } from 'rxjs/operators';
import { Position } from '../../applicant_data/position.model';
import { Stage } from '../../applicant_data/stage.model';
import { BackendAFService } from './backend-ApplyFor.service';
import { BackendStageService } from './backend-Stage.service';
import { PositionRepository } from '../../repository/position.repository';
import { StageRepository } from '../../repository/stage.repository';
import { ApplicantRepository } from '../../repository/applicant.repository';



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
    private bakenS: BackendService,
    private bakenAF: BackendAFService,
    private bakenStage: BackendStageService,
    private stageRep: StageRepository,
    private posRep: PositionRepository,
    private appRep: ApplicantRepository
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

// getData(url, para){
//   return this.http.get(url).pipe(
//     map(
//       (data) => {
//         return data;
//       },{
//         //hanldel error
//       }
//     )
//   );
// }

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
