import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.componet';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: 
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path:'feed',
        loadComponent: () => import('src/app/pages/feed/feed.component').then(m => m.FeedComponent),
      },
      {
        path:'community',
        loadComponent: () => import('src/app/pages/community/community.component').then(m => m.CommunityComponent),
      },
      {
        path:'projects',
        loadComponent: () => import('src/app/pages/projects/projects.component').then(m => m.ProjectsComponent),
      },
      {
        path:'profile',
        loadComponent: () => import('src/app/pages/profile/profile.component').then(m => m.ProfileComponent),
      },
      {
        path:'dashboard',
        loadComponent: () => import('src/app/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path:'ecosystem-admin',
        loadComponent: () => import('src/app/pages/ecosystem-admin/ecosystem-admin.component').then(m => m.EcosystemAdminComponent),
      },
      {
        path:'project-dashboard',
        loadComponent: () => import('src/app/pages/project-dashboard/project-dashboard.component').then(m => m.ProjectDashboardComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
