import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiFetchingService } from 'src/app/services/api-fetching.service';
import { UsersdatatableComponent } from 'src/app/usersdatatable/usersdatatable.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private ref:MatDialogRef<UsersdatatableComponent>) {}

data1:any={
id:true,
fullname:'prakash',
};

popUpopen(){
this.ref.close(this.data1)
}

}
