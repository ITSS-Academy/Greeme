import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskStatusesRoutingModule } from './task-statuses-routing.module';
import { TaskStatusesComponent } from './task-statuses.component';


@NgModule({
  declarations: [
    TaskStatusesComponent
  ],
  imports: [
    CommonModule,
    TaskStatusesRoutingModule
  ]
})
export class TaskStatusesModule { }
