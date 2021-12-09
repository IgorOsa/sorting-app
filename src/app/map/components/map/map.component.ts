import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Subject } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit, OnChanges, AfterViewInit {
  public map!: mapboxgl.Map;
  public ecoStations!: any;
  public geoJsonData!: any;
  public center!: any;
  public zoom!: any;
  public style!: string | undefined;
  eventsSubject: Subject<any> = new Subject<any>();

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
      this.geoJsonData = store.geoJsonData;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  mapLoadEvent(map: mapboxgl.Map) {
    // console.log('map loaded');
    this.map = map;
  }

  mapClickEventHandler(event: any) {
    this.eventsSubject.next(event);
  }

  markerClickEventHandler(event: any) {
    console.log(event);
  }
}
