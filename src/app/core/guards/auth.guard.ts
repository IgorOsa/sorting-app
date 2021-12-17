import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.currentUserValue.access_token) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
