import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProjectsComponent } from './admin-projects.component';

const routes: Routes = [{ path: '', component: AdminProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProjectsRoutingModule { }
