import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from '../models/Persons';


const localUrl = 'https://tekdi-challenges.appspot.com/api/People';


@Injectable({
  providedIn: 'root',
})

export class ListService {

  constructor(private http: HttpClient) { }


  getPersons():Observable<Person[]> {
    const params = new HttpParams();
   
    return this.http.get<Person[]>(localUrl,{params} );
  }



}