import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingProjectComponent } from './setting-project.component';

const routes: Routes = [{ path: '', component: SettingProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingProjectRoutingModule { }
