import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppLoaderService } from '../apploader/apploader.service';
import { FormSubmitService } from '../form-submit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-programer-modal',
  templateUrl: './programer-modal.component.html',
  styleUrls: ['./programer-modal.component.css']
})
export class ProgramerModalComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    @Inject(MAT_DIALOG_DATA) programdata:any,
    public dialogRef: MatDialogRef<ProgramerModalComponent>,
    public formsubmit: FormSubmitService, private loader: AppLoaderService,
    public toster :ToastrService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      id:[programdata.id,[]],
      createddate:[programdata.createddate,[]]
    });
if(programdata!=undefined && programdata!=null){
  this.form.patchValue({
    name:programdata.name,
    description :programdata.description
  })
}
  }
  submit(form: NgForm) {
    console.log(form);
    this.loader.open("Please Wait......");
    this.formsubmit.updateProjectsData(form).subscribe({
      next: (resp: any) => {
        if(resp.message == 'Data saved successfully'){
          this.toster.success(resp.message);
        }else{
          this.toster.error(resp.message)
        }
        this.loader.close();
      },
      error: (err: any) => {
       console.log(err);
       this.toster.error(err);
        this.loader.close();
      }
    })
    this.dialogRef.close({
      clicked: 'submit',
      form: form,
    });
  }
}
