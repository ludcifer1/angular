import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService, MyOption } from "../service/base.service";
import { map } from 'rxjs/operators';


@Injectable()
export class StageRepository {
  apiUrl = 'https://applicantapi.azurewebsites.net/api/';
  constructor(private baseService: BaseService) { }
  getStage() {
    const option = new MyOption(this.apiUrl, 'InterviewStage', {
      observe: 'response',
      responseType: 'json'
    });
    return this.baseService.doGet(option).pipe(map(resp => {
        return resp.body;
      }));
  }
}
