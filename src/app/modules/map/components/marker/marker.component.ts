import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ecoServiceEntity } from '../../../../core/interfaces/ecoService.entity';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MarkerComponent implements OnInit, OnDestroy {
  private eventsSubscription!: Subscription;
  @Input() events!: Observable<any>;
  @Input() es!: ecoServiceEntity;
  @Input() map!: mapboxgl.Map;
  clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((data) => {});
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  markerClickHandler() {
    this.map.flyTo({
      offset: [0, 70],
      center: this.es.geo,
      essential: true,
      animate: true,
      zoom: 9.5,
    });
  }
}
