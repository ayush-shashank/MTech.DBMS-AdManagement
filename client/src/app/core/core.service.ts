import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/type/user';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  user: User | undefined;
  constructor() {}

  getApi() {
    // return this.http.get(this.apiUrl);
  }
}
