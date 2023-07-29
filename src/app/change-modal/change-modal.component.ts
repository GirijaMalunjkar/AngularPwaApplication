import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-modal',
  templateUrl: './change-modal.component.html',
  styleUrls: ['./change-modal.component.css']
})
export class ChangeModalComponent {

  
  firstName: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }
  
}
