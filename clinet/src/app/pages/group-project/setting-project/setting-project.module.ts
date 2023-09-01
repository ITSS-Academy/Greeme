import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingProjectRoutingModule } from './setting-project-routing.module';
import { SettingProjectComponent } from './setting-project.component';


@NgModule({
  declarations: [
    SettingProjectComponent
  ],
  imports: [
    CommonModule,
    SettingProjectRoutingModule
  ]
})
export class SettingProjectModule { }
