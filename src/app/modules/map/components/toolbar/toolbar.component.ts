import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit {
  public toolbarData!: any;
  filtersFormGroup!: FormGroup;

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

  toggleMenu(menuType: string) {
    this.dataService.filterPoints();
  }

  filterChangeHandler(delivery = '') {
    if (delivery) {
      this.filtersFormGroup.setValue({
        ...this.filtersFormGroup.value,
        delivery,
      });
    }
    this.dataService.updateFilters(this.filtersFormGroup.value);
  }
}
