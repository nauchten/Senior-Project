import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import * as Flexmonster from 'flexmonster';
import { FlexmonsterPivot } from 'ng-flexmonster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showNav = true;
  constructor(public _authService: AuthService){}
}
