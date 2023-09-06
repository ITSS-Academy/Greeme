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
      label: 'Project 1',
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
      label: 'Task 2',
      dateStart: '2023-8-2',
      dateEnd: '2023-9-10',
      type: 'task',
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
