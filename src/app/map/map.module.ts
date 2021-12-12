import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './components/map/map.component';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {MarkerComponent} from './components/marker/marker/marker.component';
import {SharedModule} from '../shared/shared.module';
import {environment} from "../../environments/environment";
import {MapRoutingModule} from "./map-routing.module";

@NgModule({
  declarations: [MapComponent, MarkerComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxAccessToken,
    }),
    SharedModule,
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule {}
