import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskStatusesComponent } from './task-statuses.component';

const routes: Routes = [{ path: '', component: TaskStatusesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskStatusesRoutingModule { }
