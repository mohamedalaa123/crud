import { Component } from '@angular/core';
import { AddPersonService } from './add.service';
import { Router } from '@angular/router';
import { PersonViewModel } from '../models/PersonsViewModel';



@Component({
  selector: 'add-person',
  templateUrl: './add.person.component.html',
  styleUrls: ['./add.person.component.css']
})
export class AddPersonComponent {
  title = 'Add Person';

  model: PersonViewModel = {
    name: '',
    country: '',
    avatar: '',
    email: '',
    dob: ''
  }


  submitted = false;

  constructor(
    private api: AddPersonService,
    private router: Router
    ) {

   }

  onSubmit() {

    this.submitted = true;
    console.log(this.model);

    this.api.addPerson(this.model).subscribe(result => 
      
     { console.log(result);
      this.router.navigateByUrl('/list');}

      );
  }

}
