import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() showMePartially: boolean;

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      color: this.colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'A non draggable event',
      color: this.colors.blue,
      start: new Date()
    }
  ];

  refresh: Subject<any> = new Subject();

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
  constructor() { }

  ngOnInit() {
  }

}
