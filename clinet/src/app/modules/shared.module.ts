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
import { AdminservicesComponent } from '../components/shared/adminservices/adminservices.component';
import { NewProjectComponent } from '../components/shared/new-project/new-project.component';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { RoundChartComponent } from '../components/shared/round-chart/round-chart.component';
import { BarComponent } from '../components/shared/fill-bar/fill-bar.component';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';

import { NewTaskComponent } from '../components/shared/new-task/new-task.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectlistComponent } from '../components/shared/projectlist/projectlist.component';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TreeTableModule } from 'primeng/treetable';
import { KnobModule } from 'primeng/knob';
import { HomeCalendarComponent } from '../components/shared/home-calendar/home-calendar.component';
import { TasklistComponent } from '../components/shared/tasklist/tasklist.component';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
    LoginformComponent,
    ImageLoginComponent,
    RegisterformComponent,
    ImageRegisterComponent,
    AdminservicesComponent,
    NewProjectComponent,
    SidebarComponent,
    RoundChartComponent,
    BarComponent,
    NewTaskComponent,
    ProjectlistComponent,
    HomeCalendarComponent,
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
    ProgressBarModule,
    ToastModule,
    CheckboxModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    PanelModule,
    ChartModule,
    TagModule,
    DialogModule,
    KnobModule,
    SchedulerModule,
    TreeTableModule,
    DropdownModule,
    TabMenuModule,
  ],exports:[
    TagModule,
    DialogModule,
    ReactiveFormsModule,
    RoundChartComponent,
    FormsModule,
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
    ProgressBarModule,
    ToastModule,
    PanelModule,
    ChartModule,
    BarComponent,
    NewTaskComponent,
    DropdownModule,
    ProjectlistComponent,
    TreeTableModule,
    KnobModule,
    HomeCalendarComponent,
    SchedulerModule,
    TasklistComponent,
    TabMenuModule,
  ],
})
export class SharedModule { }
