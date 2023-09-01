import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingProjectRoutingModule } from './setting-project-routing.module';
import { SettingProjectComponent } from './setting-project.component';
import { SharedModule } from 'src/app/modules/shared.module';


@NgModule({
  declarations: [
    SettingProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingProjectRoutingModule
  ]
})
export class SettingProjectModule { }
