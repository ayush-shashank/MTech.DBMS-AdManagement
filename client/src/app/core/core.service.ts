import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  baseUrl = 'http://localhost:3000';
  apiUrl = `${this.baseUrl}/`;
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get(this.apiUrl);
  }
}
