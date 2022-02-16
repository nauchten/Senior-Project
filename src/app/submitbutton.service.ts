import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./user";
import {catchError} from "rxjs/operators";
import {pipe, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubmitbuttonService {

  _url = 'http://localhost:3000/submit';
  constructor(private _http: HttpClient) { }

  formData(user: User) {  // Front end side of form submission
    return this._http.post<any>(this._url, user)
              .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse) {  // Form error handling method/function
    return throwError(error);
  }

}
