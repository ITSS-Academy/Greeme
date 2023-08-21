import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstrationRoutingModule } from './adminstration-routing.module';
import { AdminstrationComponent } from './adminstration.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [AdminstrationComponent],
  imports: [CommonModule, AdminstrationRoutingModule, SharedModule],
})
export class AdminstrationModule {}
