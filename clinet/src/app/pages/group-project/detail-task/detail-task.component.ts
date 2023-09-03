import { Component } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss'],
})
export class DetailTaskComponent {
  tasks: any[] = [];
  constructor(private taskListService: TaskListService) {}

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
        return 'danger';
      case 1:
        return 'info';
      case 2:
        return 'warning';
      default:
        return 'success';
    }
  }
}
