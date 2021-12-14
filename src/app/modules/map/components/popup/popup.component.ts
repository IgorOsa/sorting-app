import { Component, Input, OnInit } from '@angular/core';
import { ecoServiceEntity } from 'src/app/core/interfaces/ecoService.entity';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() es!: ecoServiceEntity;

  constructor() {}

  ngOnInit(): void {}
}
