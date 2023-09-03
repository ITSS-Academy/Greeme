import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionsComponent } from './versions.component';

const routes: Routes = [{ path: '', component: VersionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionsRoutingModule { }
