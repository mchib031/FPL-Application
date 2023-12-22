import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  private baseUrl = 'https://fantasy.premierleague.com/api';

  constructor(private http: HttpClient) {}

  getUserInfo(userId: number): Observable<User> {
    const url = `${this.baseUrl}/element-summary/${userId}/`;
    return this.http.get<User>(url);
  }

}
