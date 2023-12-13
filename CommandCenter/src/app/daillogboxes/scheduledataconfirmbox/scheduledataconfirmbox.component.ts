import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-scheduledataconfirmbox',
  templateUrl: './scheduledataconfirmbox.component.html',
  styleUrls: ['./scheduledataconfirmbox.component.css'],
})
export class ScheduledataconfirmboxComponent {
  saveYourChanges!: boolean;
  object: any;
  constructor(
    public dialogRef: MatDialogRef<ScheduledataconfirmboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiservice: ApiServiceService,
    private toastr: ToastrService
  ) {
    if (data) {
      this.saveYourChanges = true;
    }
  }

  saveChanges() {
    const EndDate = this.dateUpByAnYear();
    if (this.data.endDate !== '') {
      this.object = {
        name: this.data.name,
        botname: this.data.botname,
        starDate: `${this.date(this.data.starDate)}T${this.time(this.data.starTime)}`,
        reoccurance: this.data.reoccurance,
        endDate: `${this.date(this.data.endDate)}T${this.time(this.data.starTime)}`,
      };
    } else {
      const currentDate = this.date(new Date());
      this.object = {
        name: this.data.name,
        botname: this.data.botname,
        starDate: `${this.date(this.data.starDate)}T${this.time(this.data.starTime)}`,
        reoccurance: this.data.reoccurance,
        endDate: EndDate,
      };}

    this.apiservice.postSchedule(this.object).subscribe({
      next: (response: any) => {
        this.toastr.success('data saved successfully');
        this.dialogRef.close();
      },
      error: (err: any) => {
        this.toastr.error(err);
        this.dialogRef.close();
      },
    });
    this.dialogRef.close();
  }

  onNoClick(data: String): void {
    this.dialogRef.close(data);
  }

  dateUpByAnYear() {
    const currentDate = new Date();
    let createdDate = String(currentDate.getDate()).padStart(2, '0');
    let createdMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    let createdYear = currentDate.getFullYear() + 1;
    let createdhour = String(currentDate.getHours()).padStart(2, '0');
    let createdMinutes = String(currentDate.getMinutes()).padStart(2, '0');
    let createdSeconds = String(currentDate.getSeconds()).padStart(2, '0');
    let createddate = `${createdYear}-${createdMonth}-${createdDate}T${createdhour}:${createdMinutes}:${createdSeconds}`;
    return createddate;
  }

  date(date: any) {
    let createdDate = String(date.getDate()).padStart(2, '0');
    let createdMonth = String(date.getMonth() + 1).padStart(2,'0');
    let createdYear = date.getFullYear();
    let createddate = `${createdYear}-${createdMonth}-${createdDate}`;
    return createddate;
  }

  time(time: any) {
    let createdHours = String(time.getUTCHours()).padStart(2, '0');
    let createdMinutes = String(time.getUTCMinutes()).padStart(2, '0');
    let createdSeconds = String(time.getUTCSeconds()).padStart(2, '0');
    let createdTime = `${createdHours}:${createdMinutes}:${createdSeconds}`;
    return createdTime;
  }

}
