import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NarbarComponent } from '../components/shared/narbar/narbar.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ButtonModule
  ],exports:[
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ButtonModule
  ]
})
export class SharedModule { }
