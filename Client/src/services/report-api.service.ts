import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from 'src/models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportApiService {
  reportsUrl = "http://localhost:3000/reports/";


  constructor(private http: HttpClient) { }

  addReport(reportData: object): Observable<JSON> {
    return this.http.post<JSON>(`${this.reportsUrl}addReport`, reportData);
  }

  //get the token of user and month in data object
  getMonthReport(data): Observable<JSON> {
    return this.http.post<JSON>(`${this.reportsUrl}getMonthReport`, data);
  }

  //get the token of user and month in data object
  getManagerMonthReport(data): Observable<any> {
    return this.http.post<any>(`${this.reportsUrl}getManagerMonthReport`, data);
  }

}
