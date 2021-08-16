import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PersonViewModel } from '../models/PersonsViewModel';


const localUrl = 'https://tekdi-challenges.appspot.com/api/People';



const httpOptions = {
  headers: new HttpHeaders()
};

httpOptions.headers.set('User-Agent', 'googlebot');
httpOptions.headers.set('Content-Type', 'application/json');



@Injectable({
  providedIn: 'root',
})



export class AddPersonService {


  constructor(private http: HttpClient) {

  }


  addPerson(newPerson: PersonViewModel): Observable<any> {


    return this.http.post(localUrl, newPerson, httpOptions);

  }


}