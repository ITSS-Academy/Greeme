import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionsRoutingModule } from './versions-routing.module';
import { VersionsComponent } from './versions.component';


@NgModule({
  declarations: [
    VersionsComponent
  ],
  imports: [
    CommonModule,
    VersionsRoutingModule
  ]
})
export class VersionsModule { }
