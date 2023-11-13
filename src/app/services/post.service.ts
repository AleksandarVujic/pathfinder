import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CLIENT_ID } from '../constants';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = `https://api.unsplash.com/photos?client_id=${CLIENT_ID}&per_page=20&page=1`;

  constructor(private http: HttpClient) {}

  getAllPosts(page: number, pageSize: number): Observable<Post> {
    const url = `${this.apiUrl}&per_page=${pageSize}&page=${page}`;
    return this.http.get<Post>(url);
  }
}
