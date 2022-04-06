
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SubmitbuttonService} from "../submitbutton.service";
import {RestService} from "../rest.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {Users} from "../users";
import {Usersinterface} from "../usersinterface";
import {HttpClientModule} from "@angular/common/http";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    alert:boolean=false

    showNav = true;

    //  userForm:FormGroup;
    listData:any;

    //  showNav = true;

    name: any;



    registerUserData:any = {email: ' ', password: ' '};
    constructor(private _auth: AuthService,
                private _router: Router, private _submitbuttonService: SubmitbuttonService,private fb:FormBuilder, public rs: RestService, private httpClient: HttpClient) { }

    ngOnInit(): void {
    }

    alertMessage() {
        this.alert = true
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

