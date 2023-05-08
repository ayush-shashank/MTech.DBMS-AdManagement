import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // brand: string = '';
  // constructor(private router: Router, private core: CoreService) {
  //   const userType = this.router.getCurrentNavigation()?.extras.state!['user'];
  //   if (userType === 'advertiser') this.initAdvertiser();
  //   else if (userType === 'employee') this.initEmployee();
  // }
  // initAdvertiser() {
  //   this.brand = this.core.user?.name!;
  // }
  // initEmployee() {
  //   this.brand = this.core.company?.companyName!;
  // }
}
