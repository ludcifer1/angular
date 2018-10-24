import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseService, MyOption } from '../service/base.service';



@Injectable()
export class PositionRepository {
  apiUrl = 'https://applicantapi.azurewebsites.net/api/';
  constructor(private baseService: BaseService) {}
  getPosition() {
    const option = new MyOption(this.apiUrl, 'Position', {
      observe: 'response',
      responseType: 'json'
    });
    return this.baseService.doGet(option).pipe(
      map(resp => {
        return resp.body;
      })
    );
  }
}
