import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueCategoriesComponent } from './issue-categories.component';

const routes: Routes = [{ path: '', component: IssueCategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueCategoriesRoutingModule { }
