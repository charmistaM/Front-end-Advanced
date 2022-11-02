import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradespipe'
})
export class GradespipePipe implements PipeTransform {
  transform(input:number): string {
    let result:string="";
    switch(input){
      case 1:
        result="OutStanding";
        break;
      
      case 2:
        result="Excellent";
        break;
      case 3:
        result="Good";
        break;
      case 4:
        result="Average";
        break;
    }
    return result;
  }

}
