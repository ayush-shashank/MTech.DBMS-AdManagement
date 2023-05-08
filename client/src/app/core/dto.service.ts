import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { catchError, map, throwError } from 'rxjs';
import { Company } from '../model/company';
import { AdCampaign } from '../model/ad-campaign';

@Injectable({
  providedIn: 'root',
})
export class DtoService {
  baseUrl = 'http://localhost:3000';
  apiUrl = `${this.baseUrl}/`;
  users = this.baseUrl + '/users';
  company = this.baseUrl + '/company';
  employee = this.baseUrl + '/employee';
  campaign = this.baseUrl + '/ad-campaign';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http
      .post<User>(`${this.users}/login`, credentials)
      .pipe(
        catchError(() => throwError(() => new Error('Invalid Credentials')))
      );
  }

  loginEmployee(credentials: {
    username: string;
    password: string;
    website: string;
  }) {
    return this.http
      .post<User[] | Company[]>(`${this.employee}/login`, credentials)
      .pipe(
        map((result) =>
          result.length === 0
            ? throwError(() => new Error('Invalid Credentials'))
            : result[0]
        ),
        catchError(() => throwError(() => new Error('Invalid Credentials')))
      );
  }

  getCompany(website: string) {
    const query = new URLSearchParams({ website });
    return this.http
      .get<Company>(`${this.employee}/website?${query}`)
      .pipe(
        catchError(() => throwError(() => new Error('Invalid Credentials')))
      );
  }

  getAdCampaign() {
    return this.http
      .get<AdCampaign>(`${this.campaign}`)
      .pipe(
        catchError(() => throwError(() => new Error('Invalid Campaign Id')))
      );
  }
}
