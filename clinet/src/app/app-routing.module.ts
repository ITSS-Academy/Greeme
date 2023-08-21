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
    path: 'projects',
    loadChildren: () =>
      import('./pages/group-project/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/group-admin/admin/admin.module').then(
        (m) => m.AdminModule
      ),
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
    path: 'adminstration',
    loadChildren: () =>
      import('./pages/group-admin/adminstration/adminstration.module').then(
        (m) => m.AdminstrationModule
      ),
  },
  {
    path: 'createproject',
    loadChildren: () =>
      import('./pages/group-project/create-project/create-project.module').then(
        (m) => m.CreateProjectModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
