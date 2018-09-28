import { Applicant } from '../../applicant_data/applicant.model';
// ================================================
// =              ATTRIBUTES SECTION              =
// ================================================

export class ApplicantService {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
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


  // ================================================
  // =              BUSINESS METHODS                =
  // ================================================
  addApplicant(applicant: Applicant) {
    this.applicants.push(applicant);
  }
  updateApplicant(id: number, applicant: Applicant) {
    this.applicants[id] = applicant;
  }
}
