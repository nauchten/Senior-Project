import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';


const adminRoutes: Routes = [{path: "admins", component: AdminComponent}];

@NgModule({
  declarations: [
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(adminRoutes)
  ]
})
export class AdminsModule { }
