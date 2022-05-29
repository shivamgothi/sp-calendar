import { Component } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css']
})
export class CalendarComponent {


  data: string = "";
  header: string = "";
  displayStyle: string = "none";

  calendarOptions: CalendarOptions = {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    plugins: [resourceTimeGridPlugin],
    initialView: 'resourceTimeGridDay',
    resources: [
      { id: 'a', title: 'Room A' },
      { id: 'b', title: 'Room B' },
      { id: 'c', title: 'Room C' },
      { id: 'd', title: 'Room D' }
    ],
    events: [
      {
        id: '1',
        resourceId: 'a',
        title: 'Standup',
        start: '2022-05-29T10:00:00',
        end: '2022-05-29T11:00:00',
      },
      {
        id: '2',
        resourceId: 'a',
        title: 'Tea Break',
        start: '2022-05-29T11:00:00',
        end: '2022-05-29T11:30:00',
      },
      {
        id: '3',
        resourceId: 'a',
        title: 'Lunch',
        start: '2022-05-29T13:00:00',
        end: '2022-05-29T14:00:00',
      },

      {
        id: '4',
        resourceId: 'a',
        title: 'Tea Break',
        start: '2022-05-29T16:00:00',
        end: '2022-05-29T16:30:00',
      },

      {
        id: '5',
        resourceId: 'b',
        title: 'Standup',
        start: '2022-05-29T14:00:00',
        end: '2022-05-29T15:00:00',
      },
      {
        id: '6',
        resourceId: 'b',
        title: 'Tea Break',
        start: '2022-05-29T16:00:00',
        end: '2022-05-29T16:30:00',
      },
      {
        id: '7',
        resourceId: 'b',
        title: 'Dinner',
        start: '2022-05-29T18:00:00',
        end: '2022-05-29T19:00:00',
      },
      {
        id: '8',
        resourceId: 'c',
        title: 'Meeting',
        start: '2022-05-29T14:00:00',
        end: '2022-05-29T18:00:00',
      },
      {
        id: '9',
        resourceId: 'c',
        title: 'Meeting',
        start: '2022-05-30T14:00:00',
        end: '2022-05-30T18:00:00',
      },
      {
        id: '10',
        resourceId: 'a',
        title: 'Meeting',
        start: '2022-05-30T10:00:00',
        end: '2022-05-30T12:00:00',
      },
      {
        id: '11',
        resourceId: 'a',
        title: 'Meeting',
        start: '2022-05-31T10:00:00',
        end: '2022-05-31T12:00:00',
      },
      {
        id: '12',
        resourceId: 'c',
        title: 'Meeting',
        start: '2022-05-31T14:00:00',
        end: '2022-05-31T18:00:00',
      }
    ],
    eventClick: this.onEventClick.bind(this)
  };


  constructor() {
    const name = Calendar.name
  }


  onEventClick(eventInfo: any) {
    this.header = eventInfo.event.title;
    let startTime = (eventInfo.event.start.getHours() > 12 ? (eventInfo.event.start.getHours() - 12).toString() : eventInfo.event.start.getHours().toString()) + ':' + ((eventInfo.event.start.getMinutes() === 0) ? '00' : eventInfo.event.start.getMinutes().toString());
    let endTime = (eventInfo.event.end.getHours() > 12 ? (eventInfo.event.end.getHours() - 12).toString() : eventInfo.event.end.getHours().toString()) + ':' + ((eventInfo.event.end.getMinutes() === 0) ? '00' : eventInfo.event.end.getMinutes().toString());
    this.data = startTime + '-' + endTime
    this.openPopup();
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
