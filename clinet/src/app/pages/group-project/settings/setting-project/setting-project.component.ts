import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-setting-project',
  templateUrl: './setting-project.component.html',
  styleUrls: ['./setting-project.component.scss']
})
export class SettingProjectComponent {
  constructor(public router: Router, protected projectService:ProjectService) {}
  public index = 0;

  public options: any[] = [
    {name:'Info', icon:'pi pi-info-circle', routerLink:'info' },
    {name:'Members', icon:'pi pi-users', routerLink:'members' },
    // {name:'Task tracking', icon:'pi pi-list', routerLink:'issue-tracking' },
    // {name:'Task Categories', icon:'pi pi-tags', routerLink:'issue-categories'},
    // {name:'Versions', icon:'pi pi-file', routerLink:'versions'},
    // {name:'Time tracking', icon:'pi pi-clock', routerLink:'time-tracking'},
  ];
  gotToPage(value: string) {
    this.router.navigate([`/projects/${this.projectService.idCurrentProject}/settings/${value}`]);
  }
}
