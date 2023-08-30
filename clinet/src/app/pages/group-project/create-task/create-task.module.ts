import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [CommonModule, CreateTaskRoutingModule, SharedModule],
})
export class CreateTaskModule {}
