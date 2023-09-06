import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectInfoRoutingModule } from './project-info-routing.module';
import { ProjectInfoComponent } from './project-info.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [ProjectInfoComponent],
  imports: [CommonModule, ProjectInfoRoutingModule, SharedModule],
})
export class ProjectInfoModule {}
