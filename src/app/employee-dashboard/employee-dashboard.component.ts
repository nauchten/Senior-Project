import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  id = ['1', '2', '3'];  // Array for id
  projectStatus= ['Completed', 'Pending', 'Not Yet Begun'];  // Array for the project status

  userModel = new User('Mollie Madison','MollieM@humana.org', '1','Completed');


  showNav = true;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

}
