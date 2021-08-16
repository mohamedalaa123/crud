import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,

  ]
})
export class AngularMaterialModule {}