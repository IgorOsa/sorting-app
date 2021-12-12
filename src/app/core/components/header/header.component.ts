import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isLoggedIn!: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user) => {
      this.isLoggedIn = !!user.access_token;
      console.log(user);
    });
  }

  goToRoute(link: string = '/') {
    this.router.navigateByUrl(link);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
