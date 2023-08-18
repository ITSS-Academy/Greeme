import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
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
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'adminstration',
    loadChildren: () =>
      import('./pages/adminstration/adminstration.module').then(
        (m) => m.AdminstrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
