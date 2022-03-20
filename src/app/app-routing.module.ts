import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {EmployeeDashboardComponent} from './employee-dashboard/employee-dashboard.component';
import {AdminDashboard2Component} from "./admin-dashboard2/admin-dashboard2.component";
import {EventsComponent} from "./events/events.component";
import {SpecialEventsComponent} from "./special-events/special-events.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {EmployeesComponent} from "./employees/employees.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: '../app/admins/admins.module#Admins'
  },
  {
    path: 'home-dashboard',
    component: AdminDashboardComponent,
  //  canActivate: [AuthGuard]  // When we go to the home dashboard the canActivate AuthGuard if true allows access, but if it is false then it restricts access to the system/tool
  },
  {
    path:'employee-dashboard',
    component: EmployeeDashboardComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboard2Component
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special-events',
    component: SpecialEventsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
