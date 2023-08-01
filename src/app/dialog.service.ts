// dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangeModalComponent } from './change-modal/change-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { BulkUploadModalComponent } from './bulk-upload-modal/bulk-upload-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openChangeProjectDialog(): void {
    const dialogConfig: MatDialogConfig = {
      width: '400px',
    };

    this.dialog.open(ChangeModalComponent, dialogConfig);
  }

  openDeleteButtonDialog(): void {
    const dialogConfig: MatDialogConfig = {
      width: '400px',
    };

    this.dialog.open(DeleteModalComponent, dialogConfig);
  }

  openBulkUploadDialog(): void {
    const dialogConfig: MatDialogConfig = {
      width: '400px',
    };

    this.dialog.open(BulkUploadModalComponent, dialogConfig);
  }
}
