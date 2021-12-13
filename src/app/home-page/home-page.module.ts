import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MapModule} from "../map/map.module";
import {SidebarModule} from "../sidebar/sidebar.module";
import {HomePageRoutingModule} from "./home-page-routing.module";


@NgModule({
  declarations: [
    HomeComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MapModule,
    SidebarModule
  ]
})
export class HomePageModule { }
