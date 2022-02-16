import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from "../user";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { SubmitbuttonService} from "../submitbutton.service";

@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {

  id = ['1', '2', '3'];  // Array for id
  projectStatus= ['Completed', 'Pending', 'Not Yet Begun'];  // Array for the project status
  Department = ['Information Technology', 'Pharmacy'];
  Priority = [ 'High', 'Medium', 'Low']
  userModel = new User('Mollie Madison','MollieM@humana.org', '1','Completed', 'Information Technology', 'High' );

//  submitted = false;
//  errorMessage = '';

  showNav = true;

  constructor(private _auth: AuthService, private _submitbuttonService: SubmitbuttonService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { // Front end side of form submission
    console.log(this.userModel);
  //   this.submitted = true; // Hides form after a user submits it
  //   this._submitbuttonService.formData(this.userModel)
  //       .subscribe(
    //         data => console.log('Form data submitted!', data),
    //         error => this.errorMessage = error.statusText
       //  )
  }



}
