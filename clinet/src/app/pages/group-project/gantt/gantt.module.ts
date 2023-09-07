import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttRoutingModule } from './gantt-routing.module';
import { GanttComponent } from './gantt.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [GanttComponent],
  imports: [CommonModule, GanttRoutingModule, SharedModule],
})
export class GanttModule {}
