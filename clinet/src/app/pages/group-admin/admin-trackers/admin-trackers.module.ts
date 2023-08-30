import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTrackersRoutingModule } from './admin-trackers-routing.module';
import { AdminTrackersComponent } from './admin-trackers.component';


@NgModule({
  declarations: [
    AdminTrackersComponent
  ],
  imports: [
    CommonModule,
    AdminTrackersRoutingModule
  ]
})
export class AdminTrackersModule { }
