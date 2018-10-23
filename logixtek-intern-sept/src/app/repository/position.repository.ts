import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PositionRepository {
  constructor(private http: HttpClient) {}
  getAllApplyFor() {
    return this.http.get(
      'https://applicantapi.azurewebsites.net/api/Position?api-version=1.0'
    );
  }
}
