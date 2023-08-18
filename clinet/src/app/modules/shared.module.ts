import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { NarbarComponent } from '../components/shared/narbar/narbar.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    AccordionModule,
    SplitterModule,
    RippleModule,
  ],exports:[
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    NarbarComponent,
    SidebarComponent,
    TabViewModule,
    TableModule,
    AccordionModule,
    SplitterModule,
    RippleModule,
  ]
})
export class SharedModule { }
