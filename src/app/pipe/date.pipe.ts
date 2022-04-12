import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): number {
    let today:any=new Date();
  
    let dateDifference=Math.abs(value-today);
    let dateSeconds=dateDifference*0.001;
    const seconds=86400;
    let daysPassed= Math.floor(dateSeconds/seconds);

    return daysPassed;
  }

}
