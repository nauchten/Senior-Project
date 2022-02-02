import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from "../user";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {

  id = ['1', '2', '3'];  // Array for id
  projectStatus= ['Completed', 'Pending', 'Not Yet Begun'];  // Array for the project status

  userModel = new User('Mollie Madison','MollieM@humana.org', '1','Completed');


  showNav = true;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }



}
