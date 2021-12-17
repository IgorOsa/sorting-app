import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ecoServiceEntity } from '../../../../core/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/modules/map/services/data.service';
import { DialogNewServiceConfirmComponent } from '../dialog-new-service-confirm/dialog-new-service-confirm.component';

@Component({
  selector: 'app-dialog-add-new-service',
  templateUrl: './dialog-add-new-service.component.html',
  styleUrls: ['./dialog-add-new-service.component.css'],
})
export class DialogAddNewServiceComponent implements OnInit {
  public wasteTypes!: string[];
  public paymentTypes!: string[];
  public deliveryTypes!: string[];
  public selectedDeliveryType?: string;
  public servicesForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAddNewServiceComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: ecoServiceEntity,
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.wasteTypes = this.dataService.store$.value.toolbarData.types;
    this.paymentTypes =
      this.dataService.store$.value.toolbarData.payment.sort();
    this.deliveryTypes = this.dataService.store$.value.toolbarData.delivery;

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
      geo: this.fb.control(
        { lng: 30.406254320054815, lat: 59.95606182091932 },
        []
      ),
    });
  }

  addService() {
    this.dataService.addService$(this.servicesForm.value).subscribe((data) => {
      if (data) {
        this.dialogRef.close();
        // console.log('Service added!', data.ecoStations);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
