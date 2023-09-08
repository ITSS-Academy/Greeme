import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Project } from 'src/app/models/project.model';
import { ProjectState } from 'src/app/ngrx/states/project.state';
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
    protected projectService: ProjectService,
    private store: Store<{
      project: ProjectState
    }>,) {
    this.id=  this.route.snapshot.paramMap.get('id')!;
    this.projectService.idCurrentProject = this.id;
    this.store.select((state) => state.project.projectCurrent).subscribe((data) => {
    // this.projectService.getProjectById(this.id).subscribe((data) => {
    //   // this.projectService.projectCurrent = data;
      this.projectCurrent = data as Project;
    // });
    });
  }

  navigiateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
