import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  firstName: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }
}
