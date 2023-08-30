import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

const routes: Routes = [
  {
    path: '', component: TaskListComponent,
    children: [
      { path: 'new', loadChildren: () => import('../create-task/create-task.module').then(m => m.CreateTaskModule) },
      { path: 'calender', loadChildren: () => import('../full-calendar/full-calendar.module').then(m => m.FullCalendarModule) },
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListRoutingModule { }
