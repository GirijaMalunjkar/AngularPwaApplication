// import {Component, Inject} from '@angular/core';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
// import {NgIf} from '@angular/common';
// import {MatButtonModule} from '@angular/material/button';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

// /**
//  * @title Injecting data when opening a dialog
//  */
// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
//   standalone: true,
//   imports: [MatButtonModule, MatDialogModule],
// })
// export class DashboardComponent {
//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     this.dialog.open(DashboardComponentChangeModal, {
//       data: {
//         animal: 'panda',
//       },
//     });
//   }
// }

// @Component({
//   selector: 'dashboard.component.changemodal',
//   templateUrl: 'dashboard.component.changemodal.html',
//   standalone: true,
//   imports: [MatDialogModule, NgIf],
// })
// export class DashboardComponentChangeModal {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeModalComponent } from '../change-modal/change-modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  title = 'angular-mateiral';

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(ChangeModalComponent,{
      data : {
        name : 'Samuel'
      },
    });
  }

}
