import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email: ' ', password: ' '}; // User data object to hold the user's data

  showNav = true;


    constructor(private _auth: AuthService,
              public _router: Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
        .subscribe(
            res => {
              localStorage.setItem('token', res.token)   // Storing in local storage
              this._router.navigate(['/home-dashboard'])
            },
            err => console.log(err)
        )
  }

}

