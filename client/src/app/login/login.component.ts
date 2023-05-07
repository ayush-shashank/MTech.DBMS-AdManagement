import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { User } from '../model/user';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string;
  password: string;
  website: string;
  isInvalid = false;
  isEmployee = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private core: CoreService
  ) {
    this.username = '';
    this.password = '';
    this.website = '';
    this.route.data.subscribe((data) => {
      console.log(data);
      console.log(data['isEmployee']);
      this.isEmployee = data['isEmployee'];
    });
  }

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (result: User) => {
        this.isInvalid = false;
        this.core.user = result;
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        this.isInvalid = true;
      },
    });
  }
  loginEmp() {
    console.log(this.username, this.password, this.website);
    this.auth.login(this.username, this.password, this.website).subscribe({
      next: (result: User) => {
        this.isInvalid = false;
        this.core.user = result;
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        this.isInvalid = true;
      },
    });
  }
}
