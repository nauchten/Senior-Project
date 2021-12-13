import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {EmployeeDashboardComponent} from './employee-dashboard/employee-dashboard.component';
import {HomeComponent} from './home/home.component';
import {AdminDashboard2Component} from "./admin-dashboard2/admin-dashboard2.component";

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path:'employee-dashboard',
    component: EmployeeDashboardComponent
  },
  {
    path: 'admin-dashboard2',
    component: AdminDashboard2Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
