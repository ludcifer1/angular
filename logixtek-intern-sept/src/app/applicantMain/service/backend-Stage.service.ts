import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class BackendStageService {
  constructor(private http: HttpClient) { }

  getAllStage () {
    return this.http.get('https://applicantapi.azurewebsites.net/api/InterviewStage?api-version=1.0');
  }

}
