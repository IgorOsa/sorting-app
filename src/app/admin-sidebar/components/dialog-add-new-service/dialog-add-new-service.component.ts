import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ecoServiceEntity} from "../../../core/interfaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-add-new-service',
  templateUrl: './dialog-add-new-service.component.html',
  styleUrls: ['./dialog-add-new-service.component.css']
})
export class DialogAddNewServiceComponent implements OnInit {
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
    public dialogRef: MatDialogRef<DialogAddNewServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ecoServiceEntity,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.servicesForm = this.fb.group({
      name: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      wasteTypes: this.fb.control('', [
        Validators.required,
      ]),

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
