import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { throwError } from 'rxjs';

export class MyOption {

  constructor(public url: string,
    public endpoint: string,
    public options: {
      headers?:
      | HttpHeaders
      | {
        [header: string]: string | string[];
      };
      observe: 'response';
      params?:
      | HttpParams
      | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType: 'json';
      withCredentials?: boolean;
    }) {}
}

@Injectable()
export class BaseService {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================

  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================
  constructor(private http: HttpClient) {}
  // ================================================
  // =              BASE METHODS                =
  // ================================================
  doGet(option: MyOption) {
    return this.http
      .get(option.url + option.endpoint, option.options)
      .pipe(catchError(this.ErrorHandler));
  }

  doPost(option: MyOption, data) {
    return this.http
      .post(option.url + option.endpoint, data, option.options)
      .pipe(catchError(this.ErrorHandler));
  }
  doDel(option: MyOption) {
    return this.http
    .delete(option.url + option.endpoint, option.options)
    .pipe(catchError(this.ErrorHandler));
  }
  doPut(option: MyOption, data) {
    return this.http
      .put(option.url + option.endpoint, data, option.options)
      .pipe(catchError(this.ErrorHandler));
  }

  // ================================================
  // =                 UTILS                        =
  // ================================================
  ErrorHandler(error: HttpErrorResponse) {
    return throwError('Loi roi ban oi ahihi' + error.message);
  }
}
