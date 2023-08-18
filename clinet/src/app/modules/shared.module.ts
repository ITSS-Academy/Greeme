import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { NarbarComponent } from '../components/shared/narbar/narbar.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { LoginformComponent } from '../components/shared/loginform/loginform.component';
import { ImageLoginComponent } from '../components/shared/image-login/image-login.component';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterformComponent } from '../components/shared/registerform/registerform.component';
import { ImageRegisterComponent } from '../components/shared/image-register/image-register.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
    LoginformComponent,
    ImageLoginComponent,
    RegisterformComponent,
    ImageRegisterComponent,
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
    ProgressBarModule,
    ToastModule,
  ],exports:[
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    NarbarComponent,
    SidebarComponent,
    MegaMenuModule,
    LoginformComponent,
    InputTextModule,
    ImageLoginComponent,
    RegisterformComponent,
    ImageRegisterComponent,
    NarbarComponent,
    SidebarComponent,
    TabViewModule,
    TableModule,
    AccordionModule,
    SplitterModule,
    RippleModule,
    ProgressBarModule,
    ToastModule,
  ]
})
export class SharedModule { }
