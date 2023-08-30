import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFieldsRoutingModule } from './custom-fields-routing.module';
import { CustomFieldsComponent } from './custom-fields.component';


@NgModule({
  declarations: [
    CustomFieldsComponent
  ],
  imports: [
    CommonModule,
    CustomFieldsRoutingModule
  ]
})
export class CustomFieldsModule { }
