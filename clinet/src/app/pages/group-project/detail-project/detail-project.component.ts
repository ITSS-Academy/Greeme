import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProjectService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent {

  items: MenuItem[]=[
    {label: 'Overview', routerLink: 'overview', },
    {label: 'Tasks', routerLink: 'issues'},
    {label: 'Gantt', routerLink: 'gantt'},
    {label: 'Kanban', routerLink: 'kanban'},
    {label: 'Calender', routerLink: 'calendar'},
    {label: 'Setting', routerLink: 'settings'},
  ] ;

  activeItem: MenuItem= this.items[0] ;
  id:string = '' ;

  constructor(private router: Router,
    private route: ActivatedRoute,
    protected projectService: ProjectService) {
    this.id=  this.route.snapshot.paramMap.get('id')!;
    this.projectService.idCurrentProject = this.id;
  }

  navigiateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
