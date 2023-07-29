// dashboard.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

// Define the DialogData interface
export interface DialogData {
  name: string;
 
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  title = 'angular-material';
  dialogRef: MatDialogRef<ChangeModalComponent> | undefined;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    
    if (this.dialogRef) {
      this.dialogRef.close();
    }

    // Configure the dialog
    const dialogConfig: MatDialogConfig = {
      data: {
        name: 'Samuel',
       
      },
      disableClose: true, 
      panelClass: 'custom-dialog-container', 
    };

    // Open the dialog with the configured options and save the reference
    this.dialogRef = this.dialog.open(ChangeModalComponent, dialogConfig);

    // Subscribe to the afterClosed() method to clear the dialogRef when the dialog is closed
    this.dialogRef.afterClosed().pipe(take(1)).subscribe(() => {
      this.dialogRef = undefined;
    });
  }
}

@Component({
  selector: 'dashboard.component.changemodal',
  templateUrl: '../change-modal/change-modal.component.html',
   styleUrls: ['../change-modal/change-modal.component.css'],
})
export class ChangeModalComponent {
  // Inject the data into the dialog component
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialog: MatDialog) {}


}
