import { Injectable } from '@angular/core';
import { DtoService } from './dto.service';
import { CoreService } from './core.service';
import { map } from 'rxjs';
import { Company } from '../model/company';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dto: DtoService, private core: CoreService) {}
  login(username: string, password: string, website?: string) {
    const credentials = { username, password };
    if (website) {
      return this.dto.loginEmployee({ ...credentials, website }).pipe(
        map((result) => {
          this.core.company = result as Company;
          return result as User;
        })
      );
    } else {
      return this.dto.login(credentials);
    }
  }

  logout() {
    this.core.user = undefined;
  }

  getUserDetails() {
    return this.core.user ?? 'User is not logged in!';
  }
}
