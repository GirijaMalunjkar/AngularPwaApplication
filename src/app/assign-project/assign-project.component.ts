import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css'],
})
export class AssignProjectComponent {
  constructor(private dialogService: DialogService) {}

  openBulkUploadDialog(): void {
    this.dialogService.openBulkUploadDialog();
  }
}
