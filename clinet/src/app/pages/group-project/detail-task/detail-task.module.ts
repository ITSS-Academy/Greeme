import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailTaskRoutingModule } from './detail-task-routing.module';
import { DetailTaskComponent } from './detail-task.component';


@NgModule({
  declarations: [
    DetailTaskComponent
  ],
  imports: [
    CommonModule,
    DetailTaskRoutingModule
  ]
})
export class DetailTaskModule { }
