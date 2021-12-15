import {Component} from '@angular/core';
import {DataService} from "../modules/map/services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogNewServiceConfirmComponent} from "./components/dialog-new-service-confirm/dialog-new-service-confirm.component";
import {DialogUpdateServiceComponent} from "./components/dialog-update-service/dialog-update-service.component";

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {

  public ecoStations!: any;
  selectedValue: any;
  searchText: any;

  constructor(private dataService: DataService, public dialog: MatDialog) {
    this.ecoStations = this.dataService.store$.value.ecoStations;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.dataService.store$.subscribe((store) => {
      this.ecoStations = store.ecoStations;
    });
  }

  addService() {
    const dialogRef = this.dialog.open(DialogNewServiceConfirmComponent);

  }

  updateService() {
    const dialogRef = this.dialog.open(DialogUpdateServiceComponent);
  }
}
