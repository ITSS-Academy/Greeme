import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTrackersComponent } from './admin-trackers.component';

const routes: Routes = [{ path: '', component: AdminTrackersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTrackersRoutingModule { }
