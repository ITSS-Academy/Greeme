import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenbersRoutingModule } from './menbers-routing.module';
import { MenbersComponent } from './menbers.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [MenbersComponent],
  imports: [CommonModule, MenbersRoutingModule, SharedModule],
})
export class MenbersModule {}
