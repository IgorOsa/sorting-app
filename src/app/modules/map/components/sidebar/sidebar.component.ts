import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  wasteTypes!: string[];
  paymentTypes!: string[];
  deliveryTypes!: string[];
  selectedDeliveryType?: string;

  public toolbarData!: any;
  typesFormGroup!: FormGroup;
  paymentFormGroup!: FormGroup;
  deliveryFormGroup!: FormGroup;
  deliveryChecked!: string;

  panelOpenState = 0;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.toolbarData = this.dataService.store$.value.toolbarData;
    this.wasteTypes = this.dataService.store$.value.toolbarData.types;
    this.paymentTypes = this.dataService.store$.value.toolbarData.payment;
    this.deliveryTypes = this.dataService.store$.value.toolbarData.delivery;
  }

  toFormGroup(questions: any[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question] = question.required
        ? new FormControl(question.value || false, Validators.required)
        : new FormControl(question.value || false);
    });
    return new FormGroup(group);
  }

  ngOnInit(): void {
    this.typesFormGroup = this.toFormGroup(this.toolbarData.types);
    this.paymentFormGroup = this.toFormGroup(this.toolbarData.payment);
    this.deliveryFormGroup = this.toFormGroup(this.toolbarData.delivery);
  }

  setPanelOpenState(index: number) {
    this.panelOpenState = index;
  }
}
