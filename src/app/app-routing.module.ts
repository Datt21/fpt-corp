import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
// import { PagePcForbiddenComponent } from '@src/app/page-pc-forbidden/page-pc-forbidden.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // Redirect signed-in user to the '/dashboards/project'
  //
  // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/core.module').then((module) => module.CoreModule),
  },
  {
    path: 'error',
    component: PageErrorComponent,
  },
  {
    path: '**',
    component: PageErrorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
