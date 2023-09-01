import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueCategoriesRoutingModule } from './issue-categories-routing.module';
import { IssueCategoriesComponent } from './issue-categories.component';


@NgModule({
  declarations: [
    IssueCategoriesComponent
  ],
  imports: [
    CommonModule,
    IssueCategoriesRoutingModule
  ]
})
export class IssueCategoriesModule { }
