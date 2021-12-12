import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponseInterface, UserInterface } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject!: BehaviorSubject<AuthResponseInterface>;
  public currentUser!: Observable<AuthResponseInterface>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthResponseInterface>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthResponseInterface {
    return this.currentUserSubject.value;
  }

  register(user: UserInterface): Observable<UserInterface> {
    const api = `/api/user`;
    return this.http.post<UserInterface>(api, user).pipe();
  }

  login(username: string, password: string) {
    return this.http
      .post<AuthResponseInterface>('/api/auth/login', { username, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({ access_token: '' });
  }
}
