import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ecoServiceEntity } from '../../../core/interfaces/ecoService.entity';

export interface DataServiceStore {
  mapDefaults: {
    zoom: number[];
    center: number[];
    style: string;
  };
  // geoJsonData?: any;
  toolbarData?: any;
  ecoStations: ecoServiceEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  store$!: BehaviorSubject<DataServiceStore>;

  constructor() {
    this.store$ = new BehaviorSubject<DataServiceStore>({
      mapDefaults: {
        zoom: [9.5],
        center: [30.34, 59.95],
        style: 'mapbox://styles/mapbox/streets-v11',
      },
      // geoJsonData: {
      //   type: 'geojson',
      //   data: {
      //     type: 'FeatureCollection',
      //     features: [
      //       {
      //         type: 'Feature',
      //         geometry: {
      //           type: 'Point',
      //           coordinates: [30.367395705072454, 59.99737697937698],
      //         },
      //         properties: {
      //           title: 'Test eco point #1',
      //         },
      //       },
      //     ],
      //   },
      // },
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
      ],
    });
  }
}
