import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Workflow } from '../schedulecon/Workflow';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public workflow: Workflow,private dialogRef: MatDialogRef<UpdateeventComponent>) {}


  onCancel(){
    this.dialogRef.close();
  }
  onSave(){

  }
}
