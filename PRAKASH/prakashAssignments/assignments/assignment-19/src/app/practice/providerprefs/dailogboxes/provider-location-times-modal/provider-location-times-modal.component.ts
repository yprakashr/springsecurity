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
  selector: 'app-provider-location-times-modal',
  templateUrl: './provider-location-times-modal.component.html',
  styleUrls: ['./provider-location-times-modal.component.scss']
})
export class ProviderLocationTimesModalComponent {

  providerLocTimes:any;
  sel_location: any;
  provWeightSliderOpt: any;
  providerPreferences: ProviderPreferences;
  provWeightsForm: any;
  locationOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };
  provPrefSliderOpt: Options = {
    floor: -50,
    ceil: 50,
    step: 1
  }
  providerOptLocations: Object;
  editProviderPrefsErrorMsg: any;

  singleObject: any;
  filteredData: any;

  constructor(private toastrService: ToastrService,private loader: AppLoaderService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data, private adminService: AdminService) {
    this.providerPreferences = this.data;
    this.getProviderOptLocations(this.providerPreferences)
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


  getProviderOptLocations(providerPreferences) {
    this.loader.open('Loading...');
    this.adminService.getProviderOptLocations(providerPreferences.id).subscribe({
      next: (getProviderOptLocationsResult: any) => {
      this.loader.close()
        this.providerOptLocations = getProviderOptLocationsResult.response.providerOptLocations;
        console.log(getProviderOptLocationsResult.response.providerOptLocations)
      }, error: (getProviderOptLocationsError) => {
      this.loader.close();
        console.log(getProviderOptLocationsError);
      }
    });
  }


  getProviderLocationTimesPref(provider, location) {
    this.loader.open('Loading...');
    this.adminService.getProviderLocationTimePref(provider, location).subscribe({
      next: (getProviderLocationTimesPrefResult: any) => {
        this.loader.close()
        this.providerLocTimes = getProviderLocationTimesPrefResult.response.providerLocationTimeSettings
        console.log(getProviderLocationTimesPrefResult)
      }, error: (getProviderLocationTimesPrefError) => {
        this.loader.close();
      this.editProviderPrefsErrorMsg = getProviderLocationTimesPrefError;
      }
    });
  }


    updateProviderLocPref(locPrefObj) {
      return this.adminService.updateProviderLocationPref(locPrefObj.provider_id, locPrefObj.location_id, locPrefObj.desirability, locPrefObj.proximity)
        .subscribe({
          next: (successCallback: any) => {
          }, error: (err: any) => {
            this.editProviderPrefsErrorMsg = err;
          }
        });
    }

  updateProviderLocTimeSlotPref(locPrefObj, timeSlotObj) {
    return this.adminService.updateProviderLocationTimePref(locPrefObj.provider_id, locPrefObj.location_id, timeSlotObj.id, timeSlotObj.start_time, timeSlotObj.end_time, timeSlotObj.desirability)
      .subscribe({
        next: (successCallback: any) => {
        }, error: (err: any) => {
        this.editProviderPrefsErrorMsg = err;
        }
      });
  }


  changeProvPrefLocTimeSlots(locPrefObj) {
    this.getProviderLocationTimesPref(locPrefObj.provider_id, locPrefObj.location_id);
  };

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



