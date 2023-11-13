import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get<Statistics>(url);
  }

  getTableData(): Observable<Statistics[]> {
    const url = `${this.apiUrl}topics?client_id=${CLIENT_ID}&per_page=50`;
    return this.http.get<Statistics[]>(url);
  }
}
