import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'password',
    firstName: 'Sorting',
    lastName: 'Expert',
    admin: true,
  },
  {
    id: 2,
    username: 'Pyotr123',
    password: 'password',
    firstName: 'Pyotr',
    lastName: ' Green',
    admin: false,
  },
];

const points = [
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
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/api/auth/login') && method === 'POST':
          return authenticate();
        case url.endsWith('/api/points') && method === 'GET':
          return getPoints();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: user.admin,
        access_token: 'fake-jwt-token',
      });
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function getPoints() {
      return ok(points);
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: string) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
