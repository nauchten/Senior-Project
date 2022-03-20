import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import {EventService} from "./event.service";
import {AuthGuard} from "./auth.guard";
import {TokenInterceptorService} from "./token-interceptor.service";
import { HttpClient} from "@angular/common/http";
import { EmployeesComponent } from './employees/employees.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    AdminDashboard2Component,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    LoginComponent,
    EmployeesComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    AuthService,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule

  ],
  providers: [AuthService, AuthGuard, EventService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
