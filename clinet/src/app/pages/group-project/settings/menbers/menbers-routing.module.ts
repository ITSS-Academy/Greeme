import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenbersComponent } from './menbers.component';

const routes: Routes = [{ path: '', component: MenbersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenbersRoutingModule { }
