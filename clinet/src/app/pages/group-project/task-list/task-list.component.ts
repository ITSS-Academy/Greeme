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
      this.tasks = issues;
    });

  }
  public isLoading: boolean = false;
  navigateToCreteTask() {
    let url= "/projects/"+this.projectService.idCurrentProject+"/issues/new";
    this.router.navigateByUrl(url);
  }
  tasks: Issue[] = [];
  detailTask: Issue={
    id: 0,
    project: {id:0,name:''},
    tracker: {id:0,name:''},
    status: {id:0,name:'',is_closed:false},
    priority: {id:0,name:''},
    author:{id:0,name:''},
    subject: "",
    description: "",
    start_date: "",
    due_date: "",
    done_ratio: 0,
    is_private: false,
    estimated_hours: 0,
    total_estimated_hours: 0,
    spent_hours: 0,
    total_spent_hours: 0,
    created_on: "",
    updated_on: "",
  };
  visible: boolean = false;
  edit: boolean = false;

  ngOnInit() {

  }
  getValue(status: string) {
    switch (status) {
      case 'New':
        return 'New';
      case 'In Progress':
        return 'In Progress';
      case 'Closed':
        return 'Closed';
      default:
        return 'Done';
    }
  }

  getValueColor(status: string) {
    switch (status) {
      case 'In Progress':
        return 'info';
      case 'Closed':
        return 'danger';
      // case 2:
      //   return 'warning';
      default:
        return 'success';
    }
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'New':
        return 'success';
      case 'In Progress':
        return 'info';
      case 'Closed':
        return 'danger';
      default:
        return 'success';
    }
  }

  openDialog(task: Issue) {
    this.detailTask = task;
    console.log(this.detailTask);
    this.visible = true;
    // this.store
  }

  openEditDialog() {
    this.visible = false;
    this.edit = true;
  }

  openEdit(task: Issue) {
    this.detailTask = task;
    this.edit = true;
  }

  createtask() {
    this.router.navigate(['/createtask']);
  }

  deleteTask(id: number) {
    // this.store.dispatch(IssueAction.deleteIssue({ id: id }));
  }

}
