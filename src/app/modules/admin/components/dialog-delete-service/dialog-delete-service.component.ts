import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-service',
  templateUrl: './dialog-delete-service.component.html',
  styleUrls: ['./dialog-delete-service.component.css'],
})
export class DialogDeleteServiceComponent {
  constructor(public dialog: MatDialog) {}

  removeService() {
    // const dialogRef = this.dialog.open(DialogAddNewServiceComponent);
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
