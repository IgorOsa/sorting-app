import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges, AfterViewInit {
  public map!: mapboxgl.Map;
  public ecoStations!: any;
  public center!: any;
  public zoom!: any;
  public style!: string | undefined;

  constructor(private dataService: DataService) {
    this.ecoStations = this.dataService.store$.value.ecoStations;
    this.center = this.dataService.store$.value.mapDefaults.center;
    this.zoom = this.dataService.store$.value.mapDefaults.zoom;
    this.style = this.dataService.store$.value.mapDefaults.style;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.dataService.store$.subscribe((store) => {
      this.ecoStations = store.ecoStations;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  mapLoadEvent(map: mapboxgl.Map) {
    console.log('map loaded');
    this.map = map;

    for (let es of this.ecoStations) {
      new mapboxgl.Marker({
        color: '#00D060',
      })
        .setLngLat(es.geo)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>${es.name}</h3><p>${es.wasteTypes}</p>`)
        )
        .addTo(map);
    }
  }

  mapClickEvent(event: any) {
    console.log(event);
  }
}
