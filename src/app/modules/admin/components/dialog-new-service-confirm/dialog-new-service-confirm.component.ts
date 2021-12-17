import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddNewServiceComponent } from '../dialog-add-new-service/dialog-add-new-service.component';

@Component({
  selector: 'app-dialog-new-service-confirm',
  templateUrl: './dialog-new-service-confirm.component.html',
  styleUrls: ['./dialog-new-service-confirm.component.css'],
})
export class DialogNewServiceConfirmComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddNewServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
