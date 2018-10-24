import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Applicant } from '../applicant_data/applicant.model';
import { BaseService, MyOption } from '../service/base.service';



@Injectable()
export class ApplicantRepository {

  apiUrl = 'https://applicantapi.azurewebsites.net/api/';
  constructor(private http: HttpClient, private baseService: BaseService) {}
  getAllApplicants() {
    const option = new MyOption(this.apiUrl, 'Applicant', {
      observe: 'response',
      responseType: 'json'
    });
    return this.baseService.doGet(option)
    .pipe(
      map(
        (resp) => {
            return resp.body;
        }
      )
    );
  }


  createApplicant(newApplicant: any) {
    const option = new MyOption(this.apiUrl, 'Applicant', {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return this.baseService.doPost(option, newApplicant);
  }


  updateApplicant(updateApplicant: any, id: number) {
    updateApplicant.Id = id;
    console.log(updateApplicant);
    console.log(id);

    const option = new MyOption(this.apiUrl, 'Applicant/' + id, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return this.baseService.doPut(option, updateApplicant);
  }


  getApplicant(id: number) {
    const option = new MyOption(this.apiUrl, 'Applicant/' + id, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return this.baseService.doGet(option);
  }


  deleteApplicant(id: number) {
    const option = new MyOption(this.apiUrl, 'Applicant/' + id, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return this.baseService.doDel(option);
  }
}
