import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyNoDecimal'
})
export class CurrencyNoDecimalPipe implements PipeTransform {

  transform(value: number | string, currencySymbol: string = '$'): string {
    if (value == null || isNaN(Number(value))) {
      return '';
    }

    const numberValue = typeof value === 'string' ? parseFloat(value) : value;

    const formattedValue = this.formatNumber(numberValue);

    return `${currencySymbol}${formattedValue}`;
  }

  private formatNumber(value: number): string {
    const valueStr = value.toString();

    const [integerPart] = valueStr.split('.');

    const parts = [];
    let start = integerPart.length % 3;
    if (start > 0) {
      parts.push(integerPart.substring(0, start));
    }
    for (let i = start; i < integerPart.length; i += 3) {
      parts.push(integerPart.substring(i, i + 3));
    }

    return parts.join('.');
  }
}