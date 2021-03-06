import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';
import { environment } from '../../../environments/environment';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MarkerComponent } from './components/marker/marker.component';
import { SharedModule } from '../../shared/shared.module';
import { PopupComponent } from './components/popup/popup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapContainerComponent } from './map-container.component';

@NgModule({
  declarations: [
    MapComponent,
    MarkerComponent,
    PopupComponent,
    SidebarComponent,
    ToolbarComponent,
    MapContainerComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxAccessToken,
    }),
    SharedModule,
  ],
  exports: [MapComponent],
})
export class MapModule {}
