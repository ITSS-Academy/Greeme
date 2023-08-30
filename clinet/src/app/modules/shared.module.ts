import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { NarbarComponent } from '../components/shared/narbar/narbar.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { RippleModule } from 'primeng/ripple';
import { NewProjectComponent } from '../components/project/new-project/new-project.component';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { RoundChartComponent } from '../components/shared/round-chart/round-chart.component';
import { BarComponent } from '../components/shared/fill-bar/fill-bar.component';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { NewTaskComponent } from '../components/shared/new-task/new-task.component';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TreeTableModule } from 'primeng/treetable';
import { KnobModule } from 'primeng/knob';
import { HomeCalendarComponent } from '../components/shared/home-calendar/home-calendar.component';
import { TasklistComponent } from '../components/shared/tasklist/tasklist.component';


@NgModule({
  declarations: [
    NarbarComponent,
    SidebarComponent,
    NewProjectComponent,
    SidebarComponent,
    RoundChartComponent,
    BarComponent,
    NewTaskComponent,
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
  ],exports:[
    TagModule,
    DialogModule,
    ReactiveFormsModule,
    RoundChartComponent,
    FormsModule,
    ButtonModule,
    NarbarComponent,
    SidebarComponent,
    MegaMenuModule,
    InputTextModule,
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
    TreeTableModule,
    KnobModule,
    HomeCalendarComponent,
    SchedulerModule,
    TasklistComponent,
  ],
})
export class SharedModule { }
