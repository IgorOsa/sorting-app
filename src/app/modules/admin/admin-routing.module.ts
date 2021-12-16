import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminSidebarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
