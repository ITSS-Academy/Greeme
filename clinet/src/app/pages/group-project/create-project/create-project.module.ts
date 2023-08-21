import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent } from './create-project.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [CreateProjectComponent],
  imports: [CommonModule, CreateProjectRoutingModule, SharedModule],
})
export class CreateProjectModule {}
