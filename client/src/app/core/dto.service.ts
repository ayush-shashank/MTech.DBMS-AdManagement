import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/type/user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DtoService {
  baseUrl = 'http://localhost:3000';
  apiUrl = `${this.baseUrl}/`;
  users = this.baseUrl + '/users';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http
      .post<User>(`${this.users}/login`, credentials)
      .pipe(
        catchError(() => throwError(() => new Error('Invalid Credentials')))
      );
  }
}
