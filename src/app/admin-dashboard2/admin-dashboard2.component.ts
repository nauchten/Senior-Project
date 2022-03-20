import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { SubmitbuttonService} from "../submitbutton.service";
import {Users} from "../users";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {
  users: Users[] = [];

 id = ['1', '2', '3'];  // Array for id
 projectStatus= ['Completed', 'Pending', 'Not Yet Begun'];  // Array for the project status
  Department = ['Information Technology', 'Pharmacy'];
 Priority = [ 'High', 'Medium', 'Low']
 userModel = new User('Hollie Madison','HollieM@humana.org', '1','Completed', 'Information Technology', 'High' );


  userForm:FormGroup;
  listData:any;

  showNav = true;

  name: any;

  constructor(private _auth: AuthService, private _submitbuttonService: SubmitbuttonService,
              private _router: Router, private fb:FormBuilder, public rs: RestService) {

    this.listData = [];






    this.userForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })

  }

  addItem(){ // Adds item to table
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
 // reset(){ // Resets item on table
 //   this.userForm.reset();
  // }

  edit(){

  }

  removeItems(element:any){ // Removes item from table
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });

  }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
    this.users=response;
    });

  }

  Search(){
      if(this.name == ""){
          this.ngOnInit();
      } else {
          this.users = this.users.filter(res => {
            return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          });
      }
  }
}
