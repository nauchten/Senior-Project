import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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


  userForm:FormGroup;
  listData:any;

  showNav = true;

  constructor(private _auth: AuthService, private _submitbuttonService: SubmitbuttonService,
              private _router: Router, private fb:FormBuilder  ) {

    this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })

  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }

  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });


  }

  ngOnInit(): void {
  }



}
