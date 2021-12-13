import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    HomeComponent,
    AdminDashboard2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
