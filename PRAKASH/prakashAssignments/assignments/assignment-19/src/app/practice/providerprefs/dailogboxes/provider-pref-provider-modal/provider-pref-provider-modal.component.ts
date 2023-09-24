import { Options } from '@angular-slider/ngx-slider';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { NgxslidervaluesSharedService } from 'src/app/services/ngxslidervalues-shared.service';
import { ProviderPreferences, provWeights } from 'src/app/util/pojo.models';
import { AdminService } from 'src/app/services/admin.service';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-provider-pref-provider-modal',
  templateUrl: './provider-pref-provider-modal.component.html',
  styleUrls: ['./provider-pref-provider-modal.component.scss']
})
export class ProviderPrefProviderModalComponent {
  editProviderPrefsErrorMsg:string='';
  prefProvWeight: number;
  filteredData: any;
  singleObject: any;
  constructor(private toastrService: ToastrService,private loader: AppLoaderService, public adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.providerPreferences = this.data;
  }

  providerPreferences: ProviderPreferences;
  provWeightsForm: any;


  ngOnInit(): void {
    this.getProvidersWeights()
  }


  payerPref!: any
  prefProv_weight: number;
  prefProv_weightName: string = 'slider4';
  valueWeightOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };


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


  // ------------------------------ closing dailog box ------------------------------------------------------

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
