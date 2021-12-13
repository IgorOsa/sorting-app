import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  wasteTypes: string[] = [
    'Organic',
    'Plastic',
    'Paper/Cardboard',
    'Hazardous',
    'Metal',
    'Glass',
    'Electrical',
    'Reusable things',
    'Bulky/Construction',
  ];
  paymentTypes: string[] = ['Paid', 'Free'];
  deliveryTypes: string[] = [
    'None',
    'From appartment door',
    'From certain location',
    'From street',
  ];
  selectedDeliveryType?: string;

  wasteTypesPanelOpenState = false;
  paymentPanelOpenState = false;
  deliveryPanelOpenState = false;
}
