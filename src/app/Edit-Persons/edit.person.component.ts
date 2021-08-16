import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { EditPersonService } from './edit.service';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Person } from '../models/Persons';


@Component({
  selector: 'Edit-person',
  templateUrl: './edit.person.component.html',
  styleUrls: ['./edit.person.component.css']
})
export class EditPersonComponent implements OnInit {
  title = 'Edit Person';

  model: Person = {
    id: 0,
    name: '',
    country: '',
    avatar: '',
    email: '',
    dob: ''
  }



  constructor(
    private api: EditPersonService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    console.log('constructor');

    this.getCurrentPerson();

  }


  ngOnInit() {
    console.log('init');
    this.getCurrentPerson();

  }


  getCurrentPerson(): void {

    let person: any = this.location.getState();
    if (person?.currentPerson == null || person?.currentPerson == null) {
      this.router.navigateByUrl('/');
    }

    console.log(person?.currentPerson);
    console.log(person?.currentPerson?.name);

    this.model.id = person?.currentPerson?.id;
    this.model.name = person?.currentPerson?.name;
    this.model.email = person?.currentPerson?.email;
    this.model.dob = person?.currentPerson?.dob;
    this.model.country = person?.currentPerson?.country;
    this.model.avatar = person?.currentPerson?.avatar;



  }

  onSubmit() {
    console.log('submit');
    console.log(this.model);
    this.api.EditPerson(this.model).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/');
    }

    );
  }

  goBack(): void {
    this.location.back();
  }

}
