import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from '../models/Persons';


const localUrl = `https://tekdi-challenges.appspot.com/api/People/`;

const httpOptions = {
  headers: new HttpHeaders()
};

httpOptions.headers.set('User-Agent', 'googlebot');
httpOptions.headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class EditPersonService {


  constructor(private http: HttpClient) { }
  EditPerson(newPersonDate: Person): Observable<any> {

    return this.http.put(localUrl + newPersonDate.id, newPersonDate, httpOptions);

  }

}