import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingProjectComponent } from './setting-project.component';

const routes: Routes = [{
  path: '', component: SettingProjectComponent,
  children: [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'info', loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule) },
    { path: 'members', loadChildren: () => import('../menbers/menbers.module').then(m => m.MenbersModule) },
    { path: 'issue-categories', loadChildren: () => import('../issue-categories/issue-categories.module').then(m => m.IssueCategoriesModule) },
    { path: 'issue-tracking', loadChildren: () => import('../issue-tracking/issue-tracking.module').then(m => m.IssueTrackingModule) },
    { path: 'versions', loadChildren: () => import('../versions/versions.module').then(m => m.VersionsModule) },
    { path: 'time-tracking', loadChildren: () => import('../time-tracking/time-tracking.module').then(m => m.TimeTrackingModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingProjectRoutingModule { }
