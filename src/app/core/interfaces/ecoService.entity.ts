export interface City {
  id: string;
  name: string;
}

export interface GeoLocation {
  lng: number; // 30.46935736099016
  lat: number; // 59.940030060436925
}

export interface Photo {
  id: string | number;
  url: string; // link to photo on server
}

type wasteType =
  | 'organic'
  | 'paper'
  | 'cardboard'
  | 'hazardous'
  | 'metal'
  | 'glass'
  | 'electrical'
  | 'reusable things'
  | 'bulky'
  | 'construction'
  | 'plastic';

export interface ecoServiceEntity {
  id: string | number; // unique identifier
  name: string; // name of organization
  cityId?: string | number; // id of city where it located
  geo: GeoLocation; // GeoLocation coordinates object
  wasteTypes: wasteType[];
  phone?: string; // (921) 111-11-11,
  address?: string; // 'Расстанный переулок, д. 1',
  photos?: Photo[]; // array of photos or empty [] if no
  payed: boolean; // 'free' | 'payed';
  paidComment?: string; // maybe some price info
  delivery: 'none' | 'apartment' | 'street' | 'location';
}

// '/api/services' endpoint must return array of ecoServiceEntity;
