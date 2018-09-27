import { Applicant } from '../../applicant_data/applicant.model';

export class ApplicantService {
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
