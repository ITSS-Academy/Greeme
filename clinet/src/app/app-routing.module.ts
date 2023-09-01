import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },

  // project
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/group-project/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'projects/new',
    loadChildren: () =>
      import('./pages/group-project/create-project/create-project.module').then(
        (m) => m.CreateProjectModule
      ),
  },
  { path: 'projects/:id', loadChildren: () => import('./pages/group-project/detail-project/detail-project.module').then(m => m.DetailProjectModule) },

  { path: 'issues/:id', loadChildren: () => import('./pages/group-project/detail-task/detail-task.module').then(m => m.DetailTaskModule) },
  // { path: 'project-info', loadChildren: () => import('./pages/group-project/settings/project-info/project-info.module').then(m => m.ProjectInfoModule) },

  // admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/group-admin/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  { path: 'admin/projects', loadChildren: () => import('./pages/group-admin/admin-projects/admin-projects.module').then(m => m.AdminProjectsModule) },
  { path: 'users', loadChildren: () => import('./pages/group-admin/admin-users/admin-users.module').then(m => m.AdminUsersModule) },
  { path: 'trackers', loadChildren: () => import('./pages/group-admin/admin-trackers/admin-trackers.module').then(m => m.AdminTrackersModule) },
  { path: 'task-statuses', loadChildren: () => import('./pages/group-admin/task-statuses/task-statuses.module').then(m => m.TaskStatusesModule) },
  { path: 'workflow', loadChildren: () => import('./pages/group-admin/workflow/workflow.module').then(m => m.WorkflowModule) },
  { path: 'groups', loadChildren: () => import('./pages/group-admin/groups/groups.module').then(m => m.GroupsModule) },
  { path: 'custom-fields', loadChildren: () => import('./pages/group-admin/custom-fields/custom-fields.module').then(m => m.CustomFieldsModule) },
  { path: 'settings', loadChildren: () => import('./pages/group-admin/setting/setting.module').then(m => m.SettingModule) },
  { path: 'roles', loadChildren: () => import('./pages/group-admin/roles/roles.module').then(m => m.RolesModule) },
  { path: 'tasks', loadChildren: () => import('./pages/group-admin/admin-task/admin-task.module').then(m => m.AdminTaskModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
