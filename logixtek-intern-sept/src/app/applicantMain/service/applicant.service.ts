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
  // =              ATTRIBUTES SECTION              =
  // ================================================
  anotherapplicantList: Applicant[] = [];
  private nextId: number;


  applicants: Applicant[] = [
    new Applicant(
      'Adam',
      'SE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    ),
    new Applicant(
      'Eva',
      'ASE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    ),
    new Applicant(
      'Simba',
      'ASE',
      'Interviewing',
      'Testsubject@logixtek.com',
      '0111001100',
      'Mr A',
      'Mr B'
    ),
    new Applicant(
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

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { this.nextId = 0; }
  // ================================================
  // =              BUSINESS METHODS                =
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
  addApplicant(applicant: Applicant) {
    this.applicants.push(applicant);
  }
  selectApplicant(index: number) {
    console.log('update Service ', index);
    // Get  the current applicant array from local storage
    const temp = this.storage.get(STORAGE_KEY);
    const tempApplicant = temp[index - 1];
    // Do update
    return tempApplicant;
  }
  updateApplicant(applicant: Applicant) {
    const id = applicant.id;
    let tempApplicant = this.selectApplicant(id - 1);
    tempApplicant = applicant;
    // replace
    const temp = this.storage.get(STORAGE_KEY);
    temp[id - 1] = tempApplicant;
    this.storage.set(STORAGE_KEY, temp);
    console.log(this.storage);
  }


  getApplicants() {
    return this.storage.get(STORAGE_KEY);
  }
  deleteApplicant(index: number) {
    console.log('Delte Service running');
    console.log('before:', this.storage);
    const temp = this.storage.get(STORAGE_KEY);
    temp.splice((index - 1), 1);
    this.storage.set(STORAGE_KEY, temp);
    console.log(this.storage);
  }


}
