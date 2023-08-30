import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTaskRoutingModule } from './admin-task-routing.module';
import { AdminTaskComponent } from './admin-task.component';


@NgModule({
  declarations: [
    AdminTaskComponent
  ],
  imports: [
    CommonModule,
    AdminTaskRoutingModule
  ]
})
export class AdminTaskModule { }
