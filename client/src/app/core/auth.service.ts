import { Injectable } from '@angular/core';
import { DtoService } from './dto.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dto: DtoService, private core: CoreService) {}
  login(username: string, password: string) {
    const credentials = { username, password };
    return this.dto.login(credentials);
  }

  logout() {
    this.core.user = undefined;
  }

  getUserDetails() {
    return this.core.user ?? 'User is not logged in!';
  }
}
