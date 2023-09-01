import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenbersRoutingModule } from './menbers-routing.module';
import { MenbersComponent } from './menbers.component';


@NgModule({
  declarations: [
    MenbersComponent
  ],
  imports: [
    CommonModule,
    MenbersRoutingModule
  ]
})
export class MenbersModule { }
