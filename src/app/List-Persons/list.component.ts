import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/Persons';

import { ListService } from './list.service';



@Component({
  selector: 'list-persons',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListPersonsComponent {
  title = 'List Persons';

 consumed=false;
  persons: Array<Person> = [];


  constructor(private api: ListService) {
    this.getPersons();
  }

  getPersons() {

    this.api.getPersons().subscribe(data => {

      console.log(data);


      for (const d of (data as any)) {
        console.log(d);
        this.persons.push({
          name: d.name,
          email: d.email,
          dob: d.dob,
          country: d.country,
          avatar: d.avatar,
          id:d.id
        });
      }
      this.consumed=true;
      console.log(this.persons);
    });


  }


}
