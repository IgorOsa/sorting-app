import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  ecoStations: [
    {
      id: 1,
      name: 'Test eco point #1',
      geo: {
        lng: 30.367395705072454,
        lat: 59.99737697937698,
      },
      wasteTypes: ['organic', 'plastic', 'paper', 'metal'],
      payed: false,
      delivery: 'none',
      phone: '(900)111-11-11',
      address: 'Spb',
    },
    {
      id: 2,
      name: 'Test eco point #2',
      geo: {
        lng: 30.20540431990662,
        lat: 59.94886059146165,
      },
      wasteTypes: ['plastic', 'paper', 'metal'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'none',
    },
    {
      id: 3,
      name: 'Test eco point #3',
      geo: {
        lng: 30.46935736099016,
        lat: 59.940030060436925,
      },
      wasteTypes: ['plastic', 'paper', 'metal'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'apartment',
    },
    {
      id: 4,
      name: 'Test eco point #4',
      geo: {
        lng: 30.367395705072454,
        lat: 59.85187260839879,
      },
      wasteTypes: ['plastic', 'paper', 'metal'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'location',
    },
    {
      id: 5,
      name: 'Test eco point #5',
      geo: { lng: 30.175983843433045, lat: 59.84727393859424 },
      wasteTypes: ['metal'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'none',
    },
    {
      id: 6,
      name: 'Test eco point #6',
      geo: { lng: 30.268120863659533, lat: 59.83535258114961 },
      wasteTypes: ['metal', 'plastic', 'glass'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'none',
    },
    {
      id: 7,
      name: 'Test eco point #7',
      geo: { lng: 30.270191896388724, lat: 59.999278210313776 },
      wasteTypes: ['metal', 'hazardous'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'none',
    },
    {
      id: 8,
      name: 'Test eco point #8',
      geo: { lng: 30.488440744063553, lat: 59.88547519514313 },
      wasteTypes: ['metal', 'glass', 'bulky'],
      payed: false,
      delivery: 'none',
    },
    {
      id: 9,
      name: 'Test eco point #9',
      geo: { lng: 30.314972836271295, lat: 59.905379260377345 },
      wasteTypes: ['metal', 'plastic', 'glass'],
      payed: true,
      paidComment: '15RUB/kg',
      delivery: 'street',
    },
    {
      id: 10,
      name: 'Test eco point #10',
      geo: { lng: 30.436254320054815, lat: 59.99606182091932 },
      wasteTypes: ['organic', 'plastic', 'metal', 'bulky'],
      payed: false,
      delivery: 'street',
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  store$!: BehaviorSubject<DataServiceStore>;
  ecoStationsAll: ecoServiceEntity[] = DEFAULT_STORE.ecoStations;

  constructor() {
    this.store$ = new BehaviorSubject<DataServiceStore>(DEFAULT_STORE);
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
