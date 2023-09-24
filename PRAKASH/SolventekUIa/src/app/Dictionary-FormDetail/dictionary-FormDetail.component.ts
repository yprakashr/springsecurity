import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppLoaderService } from '../apploader/apploader.service';
import { FormSubmitService } from '../form-submit.service';

@Component({
  selector: 'app-dummy-comp',
  templateUrl: './dictionary-FormDetail.component.html',
  styleUrls: ['./dictionary-FormDetail.component.css']
})
export class DummyCompComponent {

  empForm: any;
  globalFieldForm:any;
  forms:any=[];
  message:string="";
  success:boolean =false;
  error:boolean = false;
  name: any;
  dataTypes: any = ['Text', 'Number', 'Object', 'Date'];

  constructor(private fb: FormBuilder, public formsubmit: FormSubmitService, @Inject(MAT_DIALOG_DATA) public data: any, private loader: AppLoaderService, public dialogRef: MatDialogRef<DummyCompComponent>) { }


  ngOnInit() { this.initialForm(); }

 initialForm(){
  this.empForm = this.fb.group({
    dictionaryname: this.fb.control('', [Validators.required]),
    projectId: this.data,
    formFields : this.fb.array([])
   });
 }

  employees(): FormArray {
    return this.empForm.get('formFields') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      fieldName: this.fb.control('', []),
      type: this.fb.control('', []),
      description: this.fb.control('', []),
      object: this.fb.array([])
    });
  }

  addEmployee() {

    this.employees().push(this.newEmployee());
  }

  removeField(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  adressDetails(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('object') as FormArray;
  }

  newAddDetail(): FormGroup {
    return this.fb.group({
      key: this.fb.control('', []),
      types: this.fb.control('', []),
      desc: this.fb.control('', [])
    });
  }

  addSubKey(empIndex: number) {
    this.adressDetails(empIndex).push(this.newAddDetail());
  }

  removeObject(empIndex: number, adressIndex: number) {
    this.adressDetails(empIndex).removeAt(adressIndex);
    }

  onSubmit() {
    console.log(this.empForm.value)
    this.formsubmit.SaveDataDictionary(this.empForm).subscribe({
      next: (resp: any) => {
        if (resp.message == "Data saved successfully") {
            this.success=true;
          this.message = resp.message;
        } else {
          this.error = true;
          this.message = resp.message;
          }
        this.loader.close();
      },
      error: (err: any) => {
        //this.toastrService.error(err);
        this.error =true;
        this.message  = err;
        this.loader.close();
      }
    })
    this.empForm.reset();
    this.initialForm();
  }
  selectedType(e: any ,index:number) {
  if(e.target.value == "3: Object"){
      this.addSubKey(index);
    }
    }

}
