import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTeam:any): any {
    return value.filter((search:any) =>{
      return search.login.indexOf(searchTeam) > -1
    });
  }

}
