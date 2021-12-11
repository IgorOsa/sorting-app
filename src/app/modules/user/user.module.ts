import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UserModule {}
