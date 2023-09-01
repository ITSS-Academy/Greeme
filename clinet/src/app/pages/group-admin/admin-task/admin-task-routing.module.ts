import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTaskComponent } from './admin-task.component';

const routes: Routes = [{ path: '', component: AdminTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTaskRoutingModule { }
