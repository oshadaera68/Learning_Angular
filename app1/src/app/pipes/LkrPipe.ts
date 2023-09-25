import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'lkrCurrency'})
export class LkrPipe implements PipeTransform {
  transform(value: number, digits: string = '1.2-2'): any {
    if (value === null) return null;
    let sortedData = new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: parseInt(digits.split('-')[1], 10),
      maximumFractionDigits: parseInt(digits.split('-')[1], 10),
    }).format(Number(value))
    return sortedData;
  }

}
