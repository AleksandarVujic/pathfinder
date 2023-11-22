import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { CLIENT_ID } from '../constants';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = `https://api.unsplash.com/photos?client_id=${CLIENT_ID}`;

  constructor(private http: HttpClient) {}

  getAllPosts(page: number, pageSize: number): Observable<Post[]> {
    const httpParams = new HttpParams()
      .set('page', page)
      .append('per_page', pageSize);
    return this.http
      .get<Post[]>(this.apiUrl, { params: httpParams })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong. Please try again later.');
  }
}
