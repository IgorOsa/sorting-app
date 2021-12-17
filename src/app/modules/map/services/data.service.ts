import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, scheduled } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ecoServiceEntity } from '../../../core/interfaces/ecoService.entity';

export interface Filters {
  types: string[];
  payment: string[];
  delivery: string;
}

export interface DataServiceStore {
  mapDefaults: {
    zoom: number[];
    center: number[];
    style: string;
  };
  mapRef: null | mapboxgl.Map;
  mapEvent: null | mapboxgl.MapboxEvent;
  filters: Filters;
  toolbarData?: any;
  ecoStations: ecoServiceEntity[];
}

const DEFAULT_STORE: DataServiceStore = {
  mapDefaults: {
    zoom: [9.5],
    center: [30.34, 59.95],
    style: 'mapbox://styles/mapbox/streets-v11',
  },
  mapRef: null,
  mapEvent: null,
  filters: {
    types: [],
    payment: [],
    delivery: '',
  },
  toolbarData: {
    types: [
      'Organic',
      'Plastic',
      'Paper/Cardboard',
      'Hazardous',
      'Metal',
      'Glass',
      'Electrical',
      'Reusable things',
      'Bulky/Construction',
    ],
    payment: ['Paid', 'Free'],
    delivery: [
      'None',
      'From apartment door',
      'From certain location',
      'From street',
    ],
  },
  ecoStations: [],
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  store$!: BehaviorSubject<DataServiceStore>;
  ecoStationsAll: ecoServiceEntity[] = DEFAULT_STORE.ecoStations;

  constructor(private readonly http: HttpClient) {
    this.store$ = new BehaviorSubject<DataServiceStore>(DEFAULT_STORE);
  }

  getEcoStations() {
    return this.http.get<any>('/api/points').subscribe((ecoStations) => {
      const store = { ...this.store$.value, ecoStations };
      this.ecoStationsAll = ecoStations;
      this.store$.next(store);
    });
  }

  setMapRef(mapRef: mapboxgl.Map) {
    const store = { ...this.store$.value, mapRef };
    this.store$.next(store);
  }

  getMapRef$() {
    return of(this.store$.value.mapRef);
  }

  setMapEvent(mapEvent: mapboxgl.MapboxEvent) {
    const store = { ...this.store$.value, mapEvent };
    this.store$.next(store);
  }

  getMapEvent$() {
    return this.store$.asObservable();
  }

  addService$(service: ecoServiceEntity) {
    const id = this.store$.value.ecoStations.length + 1;
    const s = { ...service, id };
    this.ecoStationsAll.push(s);
    const store = { ...this.store$.value, ecoStations: this.ecoStationsAll };
    this.store$.next(store);

    return this.store$.asObservable();
  }

  updateFilters(filters: Filters) {
    const store = { ...this.store$.value, filters };
    this.store$.next(store);
  }

  filterPoints() {
    const store = { ...this.store$.value };
    const filters = store.filters;

    const ecoStations = this.ecoStationsAll.filter((el) => {
      let typesFilter = true;
      let paymentFilter = true;
      let deliveryFilter = true;

      if (filters.types.length) {
        const f = filters.types.reduce<string[]>((acc, el) => {
          el.toLowerCase()
            .split('/')
            .forEach((i) => {
              acc.push(i);
            });
          return acc;
        }, []);

        if (!el.wasteTypes.filter((i) => f.includes(i)).length) {
          typesFilter = false;
        }
      }

      if (filters.payment.length) {
        if (filters.payment.includes('Paid') && el.payed === true) {
        } else if (filters.payment.includes('Free') && el.payed === false) {
        } else {
          paymentFilter = false;
        }
      }

      if (filters.delivery !== '') {
        deliveryFilter = filters.delivery
          .toLocaleLowerCase()
          .includes(el.delivery.toLocaleLowerCase());
      }
      return typesFilter && paymentFilter && deliveryFilter;
    });
    const newStore = { ...store, ecoStations };
    this.store$.next(newStore);
  }
}
