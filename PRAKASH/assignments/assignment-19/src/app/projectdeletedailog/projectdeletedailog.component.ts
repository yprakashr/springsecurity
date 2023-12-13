import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormSubmitService } from '../form-submit.service';
import { ProgramerModalComponent } from '../programer-modal/programer-modal.component';
import { AppLoaderService } from '../apploader/apploader.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projectdeletedailog',
  templateUrl: './projectdeletedailog.component.html',
  styleUrls: ['./projectdeletedailog.component.css']
})
export class ProjectdeletedailogComponent {
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    @Inject(MAT_DIALOG_DATA) programdata:any,
    public dialogRef: MatDialogRef<ProgramerModalComponent>,
    public formsubmit: FormSubmitService, private loader: AppLoaderService,
    public toster :ToastrService
  ) { this.projects=programdata }
projects:any;
  popUpopen(){
  this.formsubmit.deleteProjectsData(this.projects).subscribe();
  }

}
