import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {email: ' ', password: ' '};
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() { // registerUser method/function
    this._auth.registerUser(this.registerUserData)
    .subscribe (
      res => {
        console.log(res)
        localStorage.setItem('token', res.token) // Storing in local storage
        this._router.navigate(['/admin-dashboard'])
      },

      err => console.log(err)
    )
  }

}
