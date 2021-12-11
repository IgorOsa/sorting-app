import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
