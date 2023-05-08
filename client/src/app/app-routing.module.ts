import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdCampaignComponent } from './ad-campaign/ad-campaign.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { DashContentComponent } from './dashboard/dash-content/dash-content.component';
import { AdPerformanceComponent } from './ad-performance/ad-performance.component';
import { ProductComponent } from './product/product.component';

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
  { path: 'register/company', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'campaign/:campaignId', component: AdCampaignComponent },
      { path: 'campaigns', component: AdCampaignComponent },
      {
        path: 'advertisements/:adId',
        component: AdvertisementComponent,
      },
      {
        path: 'advertisements',
        component: AdvertisementComponent,
      },
      {
        path: 'products/:productId',
        component: ProductComponent,
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'performance',
        component: AdPerformanceComponent,
      },
      { path: '', pathMatch: 'full', component: DashContentComponent },
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
