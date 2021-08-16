import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// angular material

import {MatDatepickerModule} from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';

// Pipes

import { AgePipe } from './Pipes/agePipe';



// Components
import { AppComponent } from './app.component';
import { ListPersonsComponent } from './List-Persons/list.component';
import { ListViewComponent } from './List-Persons/List-view-persons/list-view.component';
import { AddPersonComponent } from './add-persons/add.person.component';
import { EditPersonComponent } from './Edit-Persons/edit.person.component';




@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    ListViewComponent,
    AddPersonComponent,
    EditPersonComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
