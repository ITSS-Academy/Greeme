import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewProjectComponent } from './overview-project.component';

const routes: Routes = [{ path: '', component: OverviewProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewProjectRoutingModule { }
