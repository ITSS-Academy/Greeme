import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewProjectComponent } from './overview-project.component';

const routes: Routes = [{ path: '', component: OverviewProjectComponent,
children: [
  {path: 'kanban', loadChildren: () => import('../kanban/kanban.module').then(m => m.KanbanModule)},
  { path: 'gantt', loadChildren: () => import('../gantt/gantt.module').then(m => m.GanttModule) },
  { path: 'settings', loadChildren: () => import('../setting-project/setting-project.module').then(m => m.SettingProjectModule) },
  { path: 'tasks', loadChildren: () => import('../task-list/task-list.module').then(m => m.TaskListModule) },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewProjectRoutingModule { }
