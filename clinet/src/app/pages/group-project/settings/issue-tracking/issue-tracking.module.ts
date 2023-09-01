import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueTrackingRoutingModule } from './issue-tracking-routing.module';
import { IssueTrackingComponent } from './issue-tracking.component';


@NgModule({
  declarations: [
    IssueTrackingComponent
  ],
  imports: [
    CommonModule,
    IssueTrackingRoutingModule
  ]
})
export class IssueTrackingModule { }
