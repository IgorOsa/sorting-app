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
  public panelOpenState = 0;
  public toolbarData!: any;
  public filtersFormGroup!: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.toolbarData = this.dataService.store$.value.toolbarData;
  }

  ngOnInit(): void {
    this.filtersFormGroup = this.fb.group({
      types: new FormControl(this.dataService.store$.value.filters.types),
      payment: new FormControl(this.dataService.store$.value.filters.payment),
      delivery: new FormControl(this.dataService.store$.value.filters.delivery),
    });
  }

  setPanelOpenState(index: number) {
    this.panelOpenState = index;
  }

  filterChangeHandler(delivery = '') {
    this.filtersFormGroup.setValue({
      ...this.filtersFormGroup.value,
      delivery,
    });
    this.dataService.updateFilters(this.filtersFormGroup.value);
    this.dataService.filterPoints();
  }

  handleRadioChange(delivery: string) {
    if (this.filtersFormGroup.value.delivery === delivery) {
      this.filtersFormGroup.controls.delivery.setValue('');
      this.filterChangeHandler();
    } else {
      this.filterChangeHandler(delivery);
    }
  }
}
