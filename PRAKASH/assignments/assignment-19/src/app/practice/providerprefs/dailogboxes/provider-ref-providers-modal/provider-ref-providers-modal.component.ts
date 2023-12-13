import { Options } from '@angular-slider/ngx-slider';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { AdminService } from 'src/app/services/admin.service';
import { ProviderPreferences, provWeights } from 'src/app/util/pojo.models';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-provider-ref-providers-modal',
  templateUrl: './provider-ref-providers-modal.component.html',
  styleUrls: ['./provider-ref-providers-modal.component.scss']
})
export class ProviderRefProvidersModalComponent implements OnInit{
  providerRefProviderPref: any;
  editProviderPrefsErrorMsg: string = '';
  providerPreferences: ProviderPreferences;
  provWeightsForm: any;
  valueWeightOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };
  providerRefOptions: Options = {
    floor: -50,
    ceil: 50,
    step: 1
  };
  refProvWeight: number;
  filteredData: any;
  singleObject: any;


  constructor(private toastrService: ToastrService,private loader: AppLoaderService, public adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.providerPreferences = this.data;
    this.getProvidersWeights()
    this.getProviderRefProviderPref(this.providerPreferences)
  }



// ---------------------------------- getting api data --------------------------------------------------------------


  getProvidersWeights() {
    this.adminService.getProvidersWeights().subscribe({
      next: (getProvidersWeightsResult) => {
        this.provWeightsForm = (JSON.parse(JSON.stringify(getProvidersWeightsResult))).response.providersWeights;
        this.filteredData = this.provWeightsForm.filter(obj => this.providerPreferences.id === obj.provider_id);
        this.singleObject = this.filteredData.reduce((acc, obj) => { return { ...acc, ...obj }; }, {});
        console.log(this.singleObject)
      }, error: (getProvidersWeightsError) => {
        this.editProviderPrefsErrorMsg = getProvidersWeightsError;
      }
    })
  }

  getProviderRefProviderPref(providerPreferences) {
    this.loader.open('Loading...');
    this.adminService.getProviderPayerPref(providerPreferences.id).subscribe({
      next: (getProviderRefProviderPrefResult) => {
        this.loader.close();
        this.providerRefProviderPref = getProviderRefProviderPrefResult.response.providerPayerSettings;
        console.log(getProviderRefProviderPrefResult);
      }, error: (getProviderRefProviderPrefError) => { this.editProviderPrefsErrorMsg = getProviderRefProviderPrefError; 
      this.loader.close();}
    });
}


  updateProviderRefProvPref(refProvPrefObj) {
    return this.adminService.updateProviderRefProvPref(refProvPrefObj.provider_id, refProvPrefObj.payer_name, refProvPrefObj.desirability)
      .subscribe({
        next: (successCallback: any) => {
          console.log("updateProviderRefProvPref is success");
        }, error: (err: any) => {
          this.editProviderPrefsErrorMsg = err.response.message;
        }
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

// ------------------------------------ closing dailog boxes -----------------------------------------------------------

  isValueNaN(value: any) {
    return isNaN(value);
  }

  closeDialog() {
    const index = this.provWeightsForm.findIndex(obj => this.singleObject.provider_id === obj.provider_id);
    this.provWeightsForm.splice(index, 1, this.singleObject);
    this.updateProviderWeights();
    this.dialogRef.close(this.singleObject);
  }

}
