import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value / 60);

    minutes = minutes % 60;

    value = value % 60

    return `${minutes.toString().padStart(2, '0')}:${value.toString().padStart(2, '0')}`;
  }

}
