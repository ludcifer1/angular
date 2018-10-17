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
  anotherapplicantList: Applicant[] = [];

  // applicants: Applicant[] = [
  //   new Applicant(
  //     1,
  //     'Adam',
  //     'SE',
  //     'Interviewing',
  //     'Testsubject@logixtek.com',
  //     '0111001100',
  //     'Mr A',
  //     'Mr B'
  //   ),
  //   new Applicant(
  //     2,
  //     'Eva',
  //     'ASE',
  //     'Interviewing',
  //     'Testsubject@logixtek.com',
  //     '0111001100',
  //     'Mr A',
  //     'Mr B'
  //   ),
  //   new Applicant(
  //     3,
  //     'Simba',
  //     'ASE',
  //     'Interviewing',
  //     'Testsubject@logixtek.com',
  //     '0111001100',
  //     'Mr A',
  //     'Mr B'
  //   ),
  //   new Applicant(
  //     4,
  //     'Putang',
  //     'SE',
  //     'Interviewing',
  //     'Testsubject@logixtek.com',
  //     '0111001100',
  //     'Mr A',
  //     'Mr B'
  //   )
  // ];
  // ===============================================
  //


  tempApplicant: Applicant;

  // ================================================
  // =              LOCAL STORAGE                   =
  // ================================================

  public storeOnLocalStorage(applicant: Applicant): void {
    // Get Applicant Array from local storage
    const currentApplicants = this.storage.get(STORAGE_KEY) || [];
    // Push new applicant to Arr
    currentApplicants.push(applicant);
    // insert updated arr to local storage
    this.storage.set(STORAGE_KEY, currentApplicants);
  }
  // =================================================
  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================

  addApplicant(applicant: any) {
    return this.bakenS.createApplicant(applicant)
      .pipe(
        map(
          (resp) => {
            if(resp.ok){
              console.log('New Applicant is added successfully');
            }else{
              console.log('Add fail');
            }

            return resp;
          }
        )
      );
  }

  selectApplicant(id: number) {
    // Get  the current applicant array from local storage
    const tempApplicants =
      this.storage.get(STORAGE_KEY) !== null
        ? this.storage.get(STORAGE_KEY)
        : new Array<Applicant>();
    // tempApplicants.forEach(applicant => {
    //   if (applicant.id === id) {
    //     this.tempApplicant = applicant;
    //     break;
    //   }
    // });
    for (let i = 0; i < tempApplicants.length; i++) {
      if (tempApplicants[i].id === id) {
        this.tempApplicant = tempApplicants[i];
        break;
      }
    }

    return this.tempApplicant;
  }

  // updateApplicant(applicant: Applicant) {
  //   const id = applicant.getId;
  //   const temp = this.storage.get(STORAGE_KEY);

  //   // Replace
  //   for (let i = 0; i < temp.length; i++) {
  //     if (temp[i].id === id) {
  //       temp[i] = applicant;
  //       break;
  //     }
  //   }

  //   this.storage.set(STORAGE_KEY, temp);
  //   console.log(this.storage);
  // }

  // Get Applicanst List > return empty for null array in LS
  getApplicants() {
    if (this.storage.get(STORAGE_KEY) === null) {
      return [];
    } else {
      return this.storage.get(STORAGE_KEY);
    }
  }
  //
  getAll() {
    // neu nhu sau nay can xu ly cai gi do  truoc khi do du lieu
    // thi lam nhu sau
    return this.bakenS.getAllApplicants()
            .pipe(
              map(
                (data) => {
                    // muon xu li gi cung duoc
                    // do something
                    console.log('>>> aaaaaaa');

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
            console.log('>>> aaaaaaa');

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
            console.log('>>> aaaaaaa');

            // tra ve du lieu de nguoi khac nhan
            return data;
          }
        )
      );
  }

  //
  // deleteApplicant(id: number) {
  //   const temp = this.storage.get(STORAGE_KEY);
  //   // temp.forEach(applicantLoop => {
  //   //   if (applicantLoop.id === id) {
  //   //     temp.splice(id, 1);
  //   //   }
  //   // });
  //   // Delete
  //   for (let i = 0; i <= temp.length; i++) {
  //     console.log('loop ' + i);

  //     if (temp[i].id === id) {
  //       console.log('del ' + id + ' at ' + i);

  //       temp.splice(i, 1);
  //       break;
  //     }
  //   }
  //   this.storage.set(STORAGE_KEY, temp);
  // }
  getApplicant(id: number) {
    return this.bakenS.getApplicant(id);
  }
  deleteApplicant(id: number) {
    return this.bakenS.deleteApplicant(id);
  }
  updateApplicant(applicant: Applicant) {
    const id = applicant.getId;
    return this.bakenS.updateApplicant(applicant, id);
  }
  // ================================================
  getId() {
    const applicants = this.getApplicants();
    let len = 0;
    if (applicants !== null) {
      len = applicants.length;
    }

    let id;
    if (len === 0) {
      id = 1;
    } else {
      id = applicants[len - 1].getId;
      id += 1;
    }
    console.log(id);

    return id;
  }
}
