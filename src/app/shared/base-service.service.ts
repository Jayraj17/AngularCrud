import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      this.httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      this.httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string, id: number): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}` + '/' + id,
    ).pipe(catchError(this.formatErrors));
  }

}
