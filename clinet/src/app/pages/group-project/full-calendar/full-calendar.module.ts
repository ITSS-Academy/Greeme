import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarRoutingModule } from './full-calendar-routing.module';
import { FullCalendarComponent } from './full-calendar.component';
import { SharedModule } from 'src/app/modules/shared.module';


@NgModule({
  declarations: [
    FullCalendarComponent
  ],
  imports: [
    CommonModule,
    FullCalendarRoutingModule,
    SharedModule,
  ]
})
export class FullCalendarModule { }
