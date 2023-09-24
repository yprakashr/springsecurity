import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { AdminService } from 'src/app/services/admin.service';
import { NgxslidervaluesSharedService } from 'src/app/services/ngxslidervalues-shared.service';
import { ProviderPreferences, provWeights } from 'src/app/util/pojo.models';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-provider-appts-modal',
  templateUrl: './provider-appts-modal.component.html',
  styleUrls: ['./provider-appts-modal.component.scss']
})
export class ProviderApptsModalComponent {
  editProviderPrefsErrorMsg: string = '';
  providerActivityPref: any;
  activityWeight: number;
  filteredData: any;
  singleObject: any;


  constructor(private toastrService: ToastrService,private loader: AppLoaderService, public adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.providerPreferences = this.data;
    this.getProviderActivityPref(this.providerPreferences)
    this.getProvidersWeights();
  }

  providerPreferences: ProviderPreferences;
  provWeightsForm: any;
  valueWeightOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };
  isValueNaN(value: any) {
    return isNaN(value);
  }


// --------------------------------- calling apis ------------------------------------------------

  getProvidersWeights() {
    this.adminService.getProvidersWeights().subscribe({
      next: (getProvidersWeightsResult) => {
        this.provWeightsForm = (JSON.parse(JSON.stringify(getProvidersWeightsResult))).response.providersWeights;
        this.filteredData = this.provWeightsForm.filter(obj => this.providerPreferences.id === obj.provider_id);
        this.singleObject = this.filteredData.reduce((acc, obj) => { return { ...acc, ...obj }; }, {});
        console.log(this.singleObject)
      },
        error: (err) => {  
          this.editProviderPrefsErrorMsg = err.error.message;
          this.toastrService.error(err.error.message);
      }
    })
  }



  getProviderActivityPref(providerPreferences: any): any {
    this.loader.open('Loading...');
    this.adminService.getProviderActivityPref(providerPreferences.id).subscribe({
      next: (getProviderActivityPrefResult: any) => {
        this.loader.close();
        this.providerActivityPref = getProviderActivityPrefResult.response.providerActivitySettings
        console.log(this.providerActivityPref)
      },  error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    });
}


  updateProviderActivityPref(provActivityPrefObj) {
    return this.adminService.updateProviderActivityPref(provActivityPrefObj.provider_id, provActivityPrefObj.activity_id, provActivityPrefObj.desirability)
      .subscribe({
        next: (successCallback: any) => {
        }, error: (err: any) => { this.editProviderPrefsErrorMsg = err; }
      });
  }

  updateProviderWeights() {
    this.adminService.updateProviderWeights(this.provWeightsForm)
      .subscribe({
        next: () => {
          /* Do Nothing */
          console.log("provider weight form is successfully updated")
        }, error: (updateProviderWeightsError) => {
          this.editProviderPrefsErrorMsg = updateProviderWeightsError;
        }
      });
  }


  closeDialog() {
    const index = this.provWeightsForm.findIndex(obj => this.singleObject.provider_id === obj.provider_id);
    this.provWeightsForm.splice(index, 1, this.singleObject);
    this.updateProviderWeights();
    this.dialogRef.close(this.singleObject);
  }

}













