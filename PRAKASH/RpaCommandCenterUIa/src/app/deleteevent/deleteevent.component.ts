import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent {
   

  constructor(private dialogRef: MatDialogRef<DeleteeventComponent>) {}

  onCancel(){
    this.dialogRef.close();
  }
  onDelete(){
    this.dialogRef.close();
  }
}
