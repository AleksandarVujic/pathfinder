import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  catchError,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

import { Statistics } from '../models/statistics.interface';
import { CLIENT_ID } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private apiUrl = `https://api.unsplash.com/`;

  constructor(private http: HttpClient) {}

  getTotalStatistics(): Observable<Statistics> {
    const url = `${this.apiUrl}stats/total?client_id=${CLIENT_ID}`;
    return this.http.get<Statistics>(url).pipe(catchError(this.handleError));
  }

  getTableData(): Observable<Statistics[]> {
    const url = `${this.apiUrl}topics?client_id=${CLIENT_ID}&per_page=50`;
    return this.http.get<Statistics[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong. Please try again later.');
  }
}
