import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';
@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GanttComponent {
  @ViewChild('ganttchart', { read: GanttChartComponent, static: false })
  ganttChart!: GanttChartComponent;

  view = 'week';
  currentTimeIndicator: boolean = true;
  currentTimeIndicatorInterval: number = 60;

  dataSource: Array<object> = [
    {
      label: '01_Setup',
      dateStart: '2023-8-25',
      dateEnd: '2023-9-14',
      type: 'project',
      expanded: true,
      tasks: [
        {
          label: 'Task 1.1',
          dateStart: '2023-9-1',
          dateEnd: '2023-9-4',
          type: 'task',
        },
        {
          label: 'Task 1.2',
          dateStart: '2023-8-27',
          dateEnd: '2023-9-31',
          type: 'task',
        },
      ],
    },
    {
      label: '02_Coding',
      dateStart: '2023-9-2',
      dateEnd: '2023-9-10',
      type: 'project',
      expanded: true,
      tasks: [
        {
          label: 'Task 2.1',
          dateStart: '2023-9-3',
          dateEnd: '2023-9-25',
          type: 'task',
        },
      ],
    },
    {
      label: '04_Unit Test Report',
      dateStart: '2023-8-30',
      dateEnd: '2023-9-3',
      type: 'project',
    },
    {
      label: '05_Fixing bug',
      dateStart: '2023-10-1',
      dateEnd: '2023-10-15',
      type: 'project',
    },
    {
      label: '06_Bug UAT',
      dateStart: '2023-9-1',
      dateEnd: '2023-9-31',
      type: 'project',
      expanded: true,
      tasks: [
        {
          label: 'Task 6.1',
          dateStart: '2023-9-2',
          dateEnd: '2023-9-10',
          type: 'task',
        },
        {
          label: 'Task 6.2',
          dateStart: '2023-9-27',
          dateEnd: '2023-10-15',
          type: 'task',
        },
      ],
    },
  ];

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
