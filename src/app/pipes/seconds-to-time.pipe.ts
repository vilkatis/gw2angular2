import { Pipe, PipeTransform } from '@angular/core';
import * as Moment from 'moment';

@Pipe({
  name: 'mySecondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {

  public transform(seconds: number): any {
    return Math.floor(Moment.duration(seconds * 1000).asHours());
  }

}
