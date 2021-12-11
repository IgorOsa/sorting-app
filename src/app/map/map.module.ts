import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './components/map/map.component';
// import { MapRoutingModule } from './map-routing.module';
import {environment} from '../../environments/environment';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';

@NgModule({
    declarations: [MapComponent],
    imports: [
        CommonModule,
        // MapRoutingModule,
        NgxMapboxGLModule.withConfig({
            accessToken: environment.mapboxAccessToken,
        }),
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule {}
