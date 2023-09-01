import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTaskComponent } from './detail-task.component';

const routes: Routes = [{ path: '', component: DetailTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTaskRoutingModule { }
