import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})

export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {


    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}