import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countYears'
})
export class CountYearsPipe implements PipeTransform {

  transform(value: any): any{
    let currentDate:any = new Date().getDate()//get today's date and time
    let currentYear = currentDate.getFullYear()
    let inputtedDate:any = currentYear.getDate();
    let now = inputtedDate.getFullYear()
    let differenceInYears = currentYear - now;


    if(differenceInYears >=1){
      return differenceInYears
    } else{
      return 0
    }  

  } 

  

}
