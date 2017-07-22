import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { PhonesComponent }      from './phones.component';
import { PhoneDetailComponent }  from './phone-detail.component';

const routes: Routes = [
  // defining paths
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: PhoneDetailComponent },
  { path: 'Phones',     component: PhonesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
