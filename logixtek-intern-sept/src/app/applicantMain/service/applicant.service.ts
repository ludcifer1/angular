import { Applicant } from "../../applicant_data/applicant.model";
import { Inject, Injectable } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "angular-webstorage-service";
// ================================================
// =              ATTRIBUTES SECTION              =
// ================================================
const STORAGE_KEY = "local_applicant_list";
@Injectable()
export class ApplicantService {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  anotherapplicantList: Applicant[] = [];

  applicants: Applicant[] = [
    new Applicant(
      "Adam",
      "SE",
      "Interviewing",
      "Testsubject@logixtek.com",
      "0111001100",
      "Mr A",
      "Mr B"
    ),
    new Applicant(
      "Eva",
      "ASE",
      "Interviewing",
      "Testsubject@logixtek.com",
      "0111001100",
      "Mr A",
      "Mr B"
    ),
    new Applicant(
      "Simba",
      "ASE",
      "Interviewing",
      "Testsubject@logixtek.com",
      "0111001100",
      "Mr A",
      "Mr B"
    ),
    new Applicant(
      "Putang",
      "SE",
      "Interviewing",
      "Testsubject@logixtek.com",
      "0111001100",
      "Mr A",
      "Mr B"
    )
  ];
  // ===============================================
  //
  applyForArr: String[] = ["ASE", "SE", "SSE", "TA"];
  stageArr: String[] = ["N/A", "Interviewing", "Done"];

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}
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
    console.log(this.storage.get(STORAGE_KEY) || "LocaL storage is empty");
  }
  // =================================================
  addApplicant(applicant: Applicant) {
    this.applicants.push(applicant);
  }
  updateApplicant(id: number, applicant: Applicant) {
    this.applicants[id] = applicant;
  }
  getApplicant() {
    return this.storage.get(STORAGE_KEY);
  }
}
