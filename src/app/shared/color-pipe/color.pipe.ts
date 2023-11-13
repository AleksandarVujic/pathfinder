import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: number, color: string): string {
    if (value < 0) {
      return 'red';
    }
    return 'green';
  }
}
