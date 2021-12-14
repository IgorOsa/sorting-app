import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ecoServiceEntity} from "../../../core/interfaces";

@Component({
  selector: 'app-dialog-add-new-service',
  templateUrl: './dialog-add-new-service.component.html',
  styleUrls: ['./dialog-add-new-service.component.css']
})
export class DialogAddNewServiceComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAddNewServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ecoServiceEntity,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
