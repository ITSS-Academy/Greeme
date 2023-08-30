import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  TaskData() {
    return [
      {
        name: 'save Button',
        description: 'save Button',
        project: 'Project Management',
        status: 0,
        dueDate: '2021-10-10',
        estimatedTime: 12,
      },
      {
        name: 'Fix bug',
        description: 'add solution for bug',
        project: 'Project Management',
        status: 1,
        dueDate: '2021-12-10',
        estimatedTime: 4,
      },
      {
        name: 'Set up forecast',
        description: 'Set up forecast for the project',
        project: 'EU Project',
        status: 2,
        dueDate: '2022-12-10',
        estimatedTime: 5,
      },
      {
        name: 'Test Issue',
        description: 'Test find the bug in the project',
        project: 'AS Project',
        status: 3,
        dueDate: '2022-12-10',
        estimatedTime: 20,
      },
      {
        name: 'Delete from database',
        description: 'delete all the data from database',
        project: 'Database Management',
        status: 0,
        dueDate: '2022-12-10',
        estimatedTime: 10,
      },
    ];
  }
  getTask() {
    return Promise.resolve(this.TaskData());
  }
}
