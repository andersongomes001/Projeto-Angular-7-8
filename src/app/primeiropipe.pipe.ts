import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiropipe'
})
export class PrimeiropipePipe implements PipeTransform {

  transform(value: number): any {
    return value.toString(16);
  }

}
