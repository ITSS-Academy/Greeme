import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Issue } from 'src/app/models/issue.model';
import { IssueAction } from 'src/app/ngrx/actions/issue.action';
import { IssueState } from 'src/app/ngrx/states/issue.state';
import { ProjectService } from 'src/app/services/project-list.service';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
constructor(private router:Router,private projectService:ProjectService,
  private taskListService: TaskListService,
  private store: Store<{
    issue:IssueState
  }>
  ) {

    this.store.dispatch(IssueAction.getIssues({ id: parseInt(this.projectService.idCurrentProject)}));
    this.store.select((state) => state.issue.loading).subscribe((loading) => {
      this.isLoading = loading;
    });
    this.store.select((state) => state.issue.issues).subscribe((issues) => {
      console.log(issues);
      this.tasks = issues;
    });

  }
  public isLoading: boolean = false;
  navigateToCreteTask() {
    let url= "/projects/"+this.projectService.idCurrentProject+"/issues/new";
    this.router.navigateByUrl(url);
  }
  tasks: Issue[] = [];
  detail: any[] = [];
  visible: boolean = false;
  edit: boolean = false;

  ngOnInit() {

  }
  getValue(status: number) {
    switch (status) {
      case 0:
        return 'New';
      case 1:
        return 'In Progress';
      case 2:
        return 'Review';
      default:
        return 'Done';
    }
  }

  getValueColor(status: number) {
    switch (status) {
      case 0:
        return 'info';
      case 1:
        return 'danger';
      case 2:
        return 'warning';
      default:
        return 'success';
    }
  }

  getStatusColor(status: number) {
    switch (status) {
      case 0:
        return 'info';
      case 1:
        return 'danger';
      case 2:
        return 'warning';
      default:
        return 'success';
    }
  }

  openDialog(task: any[]) {
    this.detail = [task];
    console.log(this.detail);
    this.visible = true;
  }

  openEditDialog() {
    this.visible = false;
    this.edit = true;
  }

  openEdit(task: any[]) {
    this.detail = [task];
    this.edit = true;
  }

  createtask() {
    this.router.navigate(['/createtask']);
  }
}
