import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-persons/add.person.component';
import { EditPersonComponent } from './Edit-Persons/edit.person.component';
import { ListPersonsComponent } from './List-Persons/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListPersonsComponent },
  { path: 'add', component: AddPersonComponent },
  { path: 'detail', component: EditPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
