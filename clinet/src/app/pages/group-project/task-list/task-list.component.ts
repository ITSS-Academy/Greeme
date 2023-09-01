import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
constructor(private router:Router,private projectService:ProjectService) { }

  navigateToCreteTask() {
    let url= "/projects/"+this.projectService.idCurrentProject+"/issues/new";
    this.router.navigateByUrl(url);
  }
}
