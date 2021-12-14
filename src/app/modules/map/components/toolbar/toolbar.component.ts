import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit {
  public toolbarData!: any;
  typesFormGroup!: FormGroup;
  paymentFormGroup!: FormGroup;
  deliveryFormGroup!: FormGroup;
  deliveryChecked!: string;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.toolbarData = this.dataService.store$.value.toolbarData;
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

  toggleMenu(menuType: any) {
    console.log(menuType);
  }
}
