import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { NgxslidervaluesSharedService } from 'src/app/services/ngxslidervalues-shared.service';
import { AdminService } from 'src/app/services/admin.service';
import { ProviderPreferences, provWeights } from 'src/app/util/pojo.models';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-provider-new-patient-modal',
  templateUrl: './provider-new-patient-modal.component.html',
  styleUrls: ['./provider-new-patient-modal.component.scss']
})
export class ProviderNewPatientModalComponent implements OnInit {
  editProviderPrefsErrorMsg: string = '';
  practProvidersWeights: Object;
  newPtWeight: number;
  filteredData: any;
  singleObject: any;
  constructor(private toastrService: ToastrService,private loader: AppLoaderService, public adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.providerPreferences = this.data.provPrefs;
  }
  providerPreferences: ProviderPreferences;
  provWeightsForm: any;
  valueWeightOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };



  ngOnInit(): void {
    this.getProvidersWeights();
  }

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

  providerNewPatientWeight() { this.provWeightsForm.newPt_weight = this.provWeightsForm.newPt_weight }

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
    this.dialogRef.close(this.provWeightsForm);
  }

}
