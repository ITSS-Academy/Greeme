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
        assignee: 'John Doe',
        tracker: 'Bug',
        piority: 'High',
        status: 0,
        startDate: '2021-10-10',
        dueDate: '2021-10-10',
        estimatedTime: 12,
      },
      {
        name: 'Fix bug',
        description: 'add solution for bug',
        project: 'Project Management',
        assignee: 'David Doe',
        tracker: 'Bug',
        piority: 'Medium',
        status: 1,
        startDate: '2021-10-10',
        dueDate: '2021-12-10',
        duration: 2,
        estimatedTime: 4,
        tag: 'Bug',
      },
      {
        name: 'Set up forecast',
        description: 'Set up forecast for the project',
        project: 'EU Project',
        assignee: 'Alan New',
        tracker: 'Bug',
        piority: 'Low',
        status: 2,
        startDate: '2021-10-10',
        dueDate: '2022-12-10',
        duration: 3,
        estimatedTime: 5,
        tag: 'Fix',
      },
      {
        name: 'Test Issue',
        description: 'Test find the bug in the project',
        project: 'AS Project',
        assignee: 'John Doe',
        tracker: 'Bug',
        piority: 'High',
        status: 3,
        startDate: '2021-10-10',
        dueDate: '2022-12-10',
        duration: 4,
        estimatedTime: 20,
        tag: 'Bug',
      },
      {
        name: 'Delete from database',
        description: 'delete all the data from database',
        project: 'Database Management',
        assignee: 'John Doe',
        tracker: 'Bug',
        piority: 'Medium',
        status: 0,
        startDate: '2021-10-10',
        dueDate: '2022-12-10',
        duration: 5,
        estimatedTime: 10,
        tag: 'Fix',
      },
    ];
  }
  getTask() {
    return Promise.resolve(this.TaskData());
  }
}
