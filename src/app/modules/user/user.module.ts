import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UserModule {}
