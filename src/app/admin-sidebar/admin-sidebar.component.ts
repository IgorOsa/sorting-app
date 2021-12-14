import {Component} from '@angular/core';
import {DataService} from "../modules/map/services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogNewServiceConfirmComponent} from "./components/dialog-new-service-confirm/dialog-new-service-confirm.component";

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

  openDialog() {
    const dialogRef = this.dialog.open(DialogNewServiceConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
