import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  brand: string = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private core: CoreService
  ) {
    this.brand = this.core.isEmployee
      ? this.core.company?.companyName!
      : this.core.user?.name!;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
