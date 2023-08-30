import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent {
  tasks: any[] = [];
  constructor(
    public router: Router,
    private taskListService: TaskListService
  ) {}

  ngOnInit() {
    this.taskListService.getTask().then((data) => {
      this.tasks = data;
    });
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

  createtask() {
    this.router.navigate(['/createtask']);
  }
}
