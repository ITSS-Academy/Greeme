import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-project',
  templateUrl: './overview-project.component.html',
  styleUrls: ['./overview-project.component.scss']
})
export class OverviewProjectComponent {
  activeIndex: number = 0;

  scrollableTabs: any[] =[
    {label: 'Overview', link : 'Content 1',url: '/overview'},
    {label: 'Gantt', content : 'Content 2', url: '/gantt'},
    {label: 'Kanban', content : 'Content 3', url: '/kanban'},
    {label: 'Tasks', content : 'Content 4', url: '/tasks'},
    {label: 'Calender', content : 'Content 5', url: '/calendar'},
    {label: 'Setting', content : 'Content 6', url: '/setting'},
  ]
}
