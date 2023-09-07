import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [KanbanComponent],
  imports: [CommonModule, SharedModule, KanbanRoutingModule],
})
export class KanbanModule {}
