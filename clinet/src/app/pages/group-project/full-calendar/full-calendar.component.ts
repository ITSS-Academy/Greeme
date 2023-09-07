import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Scheduler, SchedulerEvent, SchedulerViews } from 'smart-webcomponents-angular';
import { SchedulerComponent } from 'smart-webcomponents-angular/scheduler';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

  dataSource: SchedulerEvent[] = (() => {
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      const data = [
          {
              label: 'World Climate Changes',
              dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 12, 0, 0),
              dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 15, 30, 0),
              allDay: true,
              image: './../../../src/images/carousel-square-7.jpg',
              speaker: ['Linda', 'Maria'],
              backgroundColor: '#F4511E'
          },
          {
              label: 'Technologies',
              dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 10, 0, 0),
              dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12, 0, 0),
              allDay: true,
              image: './../../../src/images/smart-home-3148026_1920.jpg',
              speaker: ['Christopher', 'Nina'],
              backgroundColor: '#7986CB'
          },
          {
              label: 'Company Strategy',
              dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
              dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 30, 0),
              allDay: true,
              image: './../../../src/images/digital-marketing-1725340_960_720.jpg',
              speaker: ['Michael', 'Ivan'],
              backgroundColor: '#039BE5'
          }, {
              label: 'Marketing',
              dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
              dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 0, 0),
              image: './../../../src/images/store.jpg',
              speaker: ['Marian'],
              backgroundColor: '#8E24AA'
          }, {
              label: 'Workflow',
              dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0),
              dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0),
              image: './../../../src/images/office-1209640_960_720.jpg',
              speaker: ['Michelle', 'Christy', 'Nicole'],
              backgroundColor: '#616161'
          }, {
              label: 'Team Building',
              dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 10, 0, 0),
              dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 18, 30, 0),
              image: './../../../src/images/carousel-square-4.jpg',
              speaker: ['Natalie'],
              backgroundColor: '#3F51B5'
          }
      ];

      return data
  })();

  view: string = 'month';

  views: SchedulerViews | undefined[] = [];

  firstDayOfWeek: number = 1;

  ngOnInit(): void {
      // onInit code.
  }

  ngAfterViewInit(): void {
      // afterViewInit code.
      this.init();
  }

  init(): void {
      // init code.
  }
}
