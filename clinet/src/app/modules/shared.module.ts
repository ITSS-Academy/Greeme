import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
    LoginformComponent,
    RegisterformComponent,
    ImageLoginComponent,
    ImageRegisterComponent,
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
    InputTextModule,
    BadgeModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule
  ],
  exports: [
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
    SidebarComponent,
    BadgeModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule
  ],
})
export class SharedModule {}
