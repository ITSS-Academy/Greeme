import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProjectComponent } from './detail-project.component';

const routes: Routes = [{
  path: '', component: DetailProjectComponent,
  children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', loadChildren: () => import('../overview-project/overview-project.module').then(m => m.OverviewProjectModule) },
    { path: 'kanban', loadChildren: () => import('../kanban/kanban.module').then(m => m.KanbanModule) },
    { path: 'gantt', loadChildren: () => import('../gantt/gantt.module').then(m => m.GanttModule) },
    { path: 'calendar', loadChildren: () => import('../full-calendar/full-calendar.module').then(m => m.FullCalendarModule) },
    { path: 'settings', loadChildren: () => import('../settings/setting-project/setting-project.module').then(m => m.SettingProjectModule), },
    { path: 'issues', loadChildren: () => import('../task-list/task-list.module').then(m => m.TaskListModule) },
    { path: 'issues/new', loadChildren: () => import('../create-task/create-task.module').then(m => m.CreateTaskModule) },  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProjectRoutingModule { }
