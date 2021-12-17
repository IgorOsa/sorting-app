import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ecoServiceEntity } from '../../../../core/interfaces';
import { DialogDeleteServiceComponent } from '../dialog-delete-service/dialog-delete-service.component';

@Component({
  selector: 'app-dialog-update-service',
  templateUrl: './dialog-update-service.component.html',
  styleUrls: ['./dialog-update-service.component.css'],
})
export class DialogUpdateServiceComponent implements OnInit {
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

  public servicesForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ecoServiceEntity,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.servicesForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      wasteTypes: this.fb.control([], [Validators.required]),
      payment: this.fb.control([], [Validators.required]),
      paidComment: this.fb.control('', []),
      delivery: this.fb.control('', [Validators.required]),
      city: this.fb.control('', []),
      email: this.fb.control('', []),
      address: this.fb.control('', []),
      phone: this.fb.control('', []),
    });
  }

  saveEdits() {
    const {
      name,
      wasteTypes,
      payment,
      paidComment,
      delivery,
      city,
      email,
      address,
      phone,
    } = this.servicesForm.value;

    // console.log('name', name);
    // console.log('wasteTypes', wasteTypes);
    // console.log('payment', payment);
    // console.log('paidComment', paidComment);
    // console.log('delivery', delivery);
    // console.log('city', city);
    // console.log('email', email);
    // console.log('address', address);
    // console.log('phone', phone);
  }

  deleteService(): void {
    const dialogRef = this.dialog.open(DialogDeleteServiceComponent);

    this.dialogRef.close();
  }
}
