import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewProjectRoutingModule } from './overview-project-routing.module';
import { OverviewProjectComponent } from './overview-project.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    OverviewProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OverviewProjectRoutingModule
  ]
})
export class OverviewProjectModule { }
