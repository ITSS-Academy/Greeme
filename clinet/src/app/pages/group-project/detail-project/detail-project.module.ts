import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProjectRoutingModule } from './detail-project-routing.module';
import { DetailProjectComponent } from './detail-project.component';
import { SharedModule } from 'src/app/modules/shared.module';


@NgModule({
  declarations: [
    DetailProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DetailProjectRoutingModule
  ]
})
export class DetailProjectModule { }
