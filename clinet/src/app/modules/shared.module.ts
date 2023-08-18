import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { NarbarComponent } from '../components/shared/narbar/narbar.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],exports:[
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    NarbarComponent,
    SidebarComponent,
    MegaMenuModule
  ]
})
export class SharedModule { }
