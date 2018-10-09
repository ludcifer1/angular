import { Applicant } from '../../applicant_data/applicant.model';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
// ================================================
// =              ATTRIBUTES SECTION              =
// ================================================
const STORAGE_KEY = 'local_applicant_list';
@Injectable()
export class ApplicantService {
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  anotherapplicantList: Applicant[] = [];

  applicants: Applicant[] = [
    new Applicant(
      1,
      'Adam',
      'SE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    ),
    new Applicant(
      2,
      'Eva',
      'ASE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    ),
    new Applicant(
      3,
      'Simba',
      'ASE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    ),
    new Applicant(
      4,
      'Putang',
      'SE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    )
  ];
  // ===============================================
  //
  applyForArr: String[] = ['ASE', 'SE', 'SSE', 'TA'];
  stageArr: String[] = ['N/A', 'Interviewing', 'Done'];
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
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
  // =================================================
  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================
  addApplicant(applicant: Applicant) {
    this.applicants.push(applicant);
  }
  selectApplicant(id: number) {
    // Get  the current applicant array from local storage
    const tempApplicants = this.storage.get(STORAGE_KEY);
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

  updateApplicant(applicant: Applicant) {
    const id = applicant.id;
    const temp = this.storage.get(STORAGE_KEY);

    // Replace
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i] = applicant;
        break;
      }
    }

    this.storage.set(STORAGE_KEY, temp);
    console.log(this.storage);
  }

  // Get Applicanst List > return empty for null array in LS
  getApplicants() {
    if (this.storage.get(STORAGE_KEY) === null) {
      return [];
    } else {
      return this.storage.get(STORAGE_KEY);
    }
  }
  //
  deleteApplicant(id: number) {
    const temp = this.storage.get(STORAGE_KEY);
    // temp.forEach(applicantLoop => {
    //   if (applicantLoop.id === id) {
    //     temp.splice(id, 1);
    //   }
    // });
    // Delete
    for (let i = 0; i <= temp.length; i++) {
      console.log('loop ' + i);

      if (temp[i].id === id) {
        console.log('del ' + id + ' at ' + i);

        temp.splice(i, 1);
        break;
      }
    }
    this.storage.set(STORAGE_KEY, temp);
  }
  // ================================================
  getId() {
    this.applicants = this.getApplicants();
    const len = this.applicants.length;
    let id;
    if (len === 0) {
      id = 1;
    } else {
      id = this.applicants[len - 1].id;
      id += 1;
    }
    return id;
  }
}
