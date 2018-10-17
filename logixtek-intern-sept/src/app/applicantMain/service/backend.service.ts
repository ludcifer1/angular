import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Applicant} from '../../applicant_data/applicant.model';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}


  getAllApplicants() {
    return this.http.get('https://applicantapi.azurewebsites.net/api/Applicant/GetAll?api-version=1.0');
  }
  //
  createApplicant(newApplicant: any) {

    return this.http.post('https://applicantapi.azurewebsites.net/api/Applicant',
    newApplicant,
    {
      observe: 'response'
    });
  }
  updateApplicant(updateApplicant: any, id: number) {

    return this.http.post('https://applicantapi.azurewebsites.net/api/Applicant/' + id,
    updateApplicant,
    {
      observe: 'response'
    });
  }
  getApplicant(id: number) {
    return this.http.get('https://applicantapi.azurewebsites.net/api/Applicant/' + id,
      {
        observe: 'response'
      });
  }
  deleteApplicant(id: number) {

    return this.http.delete('https://applicantapi.azurewebsites.net/api/Applicant/' + id,
      {
        observe: 'response'
      });
  }

}
