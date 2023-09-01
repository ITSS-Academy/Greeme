import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { OverviewProjectComponent } from '../overview-project/overview-project.component';
import { CreateProjectComponent } from '../create-project/create-project.component';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent,
    children: [
      { path: 'projects/:id', loadChildren: () => import('../detail-project/detail-project.module').then(m => m.DetailProjectModule) },
      { path: 'projects/new', loadChildren: () => import('../create-project/create-project.module').then(m => m.CreateProjectModule) },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
