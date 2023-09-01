import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProjectsRoutingModule } from './admin-projects-routing.module';
import { AdminProjectsComponent } from './admin-projects.component';


@NgModule({
  declarations: [
    AdminProjectsComponent
  ],
  imports: [
    CommonModule,
    AdminProjectsRoutingModule
  ]
})
export class AdminProjectsModule { }
