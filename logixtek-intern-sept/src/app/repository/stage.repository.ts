import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StageRepository {
  constructor(private http: HttpClient) {}
  getAllStage () {
    return this.http.get('https://applicantapi.azurewebsites.net/api/InterviewStage?api-version=1.0');
  }

}
