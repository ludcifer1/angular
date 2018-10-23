import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Applicant } from '../applicant_data/applicant.model';

@Injectable()
export class ApplicantRepository {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://applicantapi.azurewebsites.net/api/Applicant/';

  getAllApplicants() {
    return this.http.get(
      // 'https://applicantapi.azurewebsites.net/api/Applicant/GetAll?api-version=1.0'
      this.apiUrl
    );
  }
  //
  createApplicant(newApplicant: any) {
    return this.http.post(this.apiUrl, newApplicant, {
      observe: 'response'
    });
  }
  updateApplicant(updateApplicant: any, id: number) {
    return this.http.put(this.apiUrl + id, updateApplicant, {
      observe: 'response'
    });
  }
  getApplicant(id: number) {
    return this.http.get(this.apiUrl + id, {
      observe: 'response'
    });
  }
  deleteApplicant(id: number) {
    return this.http.delete(this.apiUrl + id, {
      observe: 'response'
    });
  }

}
