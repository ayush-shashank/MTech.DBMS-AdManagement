import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  user: User | undefined;
  company: Company | undefined;
  isEmployee = false;
}
