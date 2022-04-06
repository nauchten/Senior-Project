import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { SubmitbuttonService} from "../submitbutton.service";
import {Users} from "../users";
import {RestService} from "../rest.service";
import {Usersinterface} from "../usersinterface";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {
     users: Usersinterface[] = [];

  //  users: Usersinterface[];

  userForm:FormGroup;
  listData:any;

  showNav = true;

  name: any;

  EditRowID: any = '';

  Selectedrow:null;



    constructor(private _auth: AuthService, private _submitbuttonService: SubmitbuttonService,
              private _router: Router, private fb:FormBuilder, public rs: RestService, private httpClient: HttpClient) {


    this.listData = [];


    this.userForm = this.fb.group({
        Name : ['', Validators.required],
        Email : ['', Validators.required],
        ProjectID: ['', Validators.required],
        Department: ['', Validators.required],
        ProjectStatus: ['', Validators.required],
        ActiveProject: ['', Validators.required]
    })

  }

  addItem(){ // Adds item to table
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }


  edit(){ // Edits the table

  }

  ShowActiveProjects(){ // Shows the active projects currently going on

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
