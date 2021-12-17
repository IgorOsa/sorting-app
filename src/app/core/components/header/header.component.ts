import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public isLoggedIn!: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user) => {
      this.isLoggedIn = !!user.access_token;
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
