import { Pipe, PipeTransform } from '@angular/core';
import * as Moment from 'moment';

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {

  transform(seconds: number): any {
    return Math.floor(Moment.duration(seconds * 1000).asHours());
  }

}
