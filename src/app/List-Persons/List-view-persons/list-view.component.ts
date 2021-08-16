import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Persons';


@Component({
  selector: 'list-view-persons',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  @Input() allPersons: Array<Person> = [];

  constructor() {
  }
}
