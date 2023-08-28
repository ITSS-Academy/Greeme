import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, TaskListRoutingModule, SharedModule],
})
export class TaskListModule {}
