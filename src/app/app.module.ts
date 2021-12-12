import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { fakeBackendProvider } from './core/fake-backend';
import { HttpClientModule } from '@angular/common/http';
import { UserIconsComponent } from './core/components/user-icons/user-icons.component';
import { UserAvatarComponent } from './core/components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIconsComponent,
    UserAvatarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
