import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminstrationComponent } from './adminstration.component';

const routes: Routes = [{ path: '', component: AdminstrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstrationRoutingModule { }
