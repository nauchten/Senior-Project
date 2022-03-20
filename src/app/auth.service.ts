import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
@NgModule()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"; // Backend server api path
  private _loginUrl = "http://localhost:3000/api/login"; // Backend server api path

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

// Auth Guard function
  loggedIn() {
    return !!localStorage.getItem('token')  // Double negat "!!" to return us a boolean value
  }
}
