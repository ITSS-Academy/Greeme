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
import { AdminservicesComponent } from '../components/shared/adminservices/adminservices.component';
import { NewProjectComponent } from '../components/shared/new-project/new-project.component';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NewTaskComponent } from '../components/shared/new-task/new-task.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectlistComponent } from '../components/shared/projectlist/projectlist.component';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TreeTableModule } from 'primeng/treetable';
import { TasklistComponent } from '../components/shared/tasklist/tasklist.component';

@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
    LoginformComponent,
    RegisterformComponent,
    ImageLoginComponent,
    ImageRegisterComponent,
    AdminservicesComponent,
    NewProjectComponent,
    SidebarComponent,
    NewTaskComponent,
    ProjectlistComponent,
    TasklistComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    AccordionModule,
    SplitterModule,
    RippleModule,
    InputTextModule,
    CheckboxModule,
    BadgeModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    DropdownModule,
    TagModule,
    DialogModule,
    TreeTableModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    NarbarComponent,
    AdminservicesComponent,
    SidebarComponent,
    MegaMenuModule,
    LoginformComponent,
    InputTextModule,
    ImageLoginComponent,
    RegisterformComponent,
    ImageRegisterComponent,
    NewProjectComponent,
    NarbarComponent,
    SidebarComponent,
    TabViewModule,
    TableModule,
    AccordionModule,
    SplitterModule,
    RippleModule,
    CheckboxModule,
    SidebarComponent,
    BadgeModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    NewTaskComponent,
    DropdownModule,
    ProjectlistComponent,
    TagModule,
    DialogModule,
    TreeTableModule,
    TasklistComponent,
  ],
})
export class SharedModule {}
