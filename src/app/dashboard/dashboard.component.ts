import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private dialogService: DialogService) {}

  openChangeProjectDialog(): void {
    this.dialogService.openChangeProjectDialog();
  }

  openDeleteButtonDialog(): void {
    this.dialogService.openDeleteButtonDialog();
  }

}
