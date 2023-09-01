import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueTrackingComponent } from './issue-tracking.component';

const routes: Routes = [{ path: '', component: IssueTrackingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueTrackingRoutingModule { }
