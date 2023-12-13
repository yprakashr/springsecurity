import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/register/register.component';

@Component({
  selector: 'app-successpopup',
  templateUrl: './successpopup.component.html',
  styleUrls: ['./successpopup.component.css']
})
export class SuccesspopupComponent {
  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
