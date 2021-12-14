import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-icons',
  templateUrl: './user-icons.component.html',
  styleUrls: ['./user-icons.component.scss'],
})
export class UserIconsComponent {
  @Output() logoutEvent = new EventEmitter();

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/logout.svg')
    );
  }

  logoutEventHandler() {
    this.logoutEvent.emit();
  }
}
