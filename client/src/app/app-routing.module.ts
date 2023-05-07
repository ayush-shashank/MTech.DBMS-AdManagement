import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdCampaignComponent } from './ad-campaign/ad-campaign.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

const routes: Routes = [
  {
    path: 'login/employee',
    component: LoginComponent,
    data: { isEmployee: true },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { isEmployee: false },
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'campaign', component: AdCampaignComponent },
      { path: 'campaign/:id', component: AdCampaignComponent },
      {
        path: ':ad-campaign/:advertisement',
        component: AdvertisementComponent,
      },
    ],
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
