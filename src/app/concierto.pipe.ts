import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concierto'
})
export class ConciertoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
