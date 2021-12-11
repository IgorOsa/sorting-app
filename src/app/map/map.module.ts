import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';
import { environment } from '../../environments/environment';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MarkerComponent } from './components/marker/marker/marker.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../core/components/header/header.component';

@NgModule({
  declarations: [MapComponent, MarkerComponent, HeaderComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxAccessToken,
    }),
    SharedModule,
  ],
})
export class MapModule {}
