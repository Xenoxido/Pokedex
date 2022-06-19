import { Pipe, PipeTransform } from '@angular/core';
import { Types } from 'src/app/models/pokemon';

@Pipe({
  name: 'convertTypes'
})
export class ConvertTypesPipe implements PipeTransform {

  transform(types: Types[]): string {
    let res : string = "";
    for(let i = 0; i < types.length; i++){
      res += types[i].type.name;
      if(i < types.length - 1){
        res += ", ";
      }
    }
    return res;
  }

}
