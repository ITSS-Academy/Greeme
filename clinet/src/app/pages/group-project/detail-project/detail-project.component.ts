import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Project } from 'src/app/models/project.model';
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
  protected projectCurrent!: Project
  constructor(private router: Router,
    private route: ActivatedRoute,
    protected projectService: ProjectService) {
    this.id=  this.route.snapshot.paramMap.get('id')!;
    this.projectService.idCurrentProject = this.id;
    this.projectService.getProjectById(this.id).subscribe((data) => {
      this.projectService.projectCurrent = data;
      this.projectCurrent = data;
    });
  }

  navigiateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
