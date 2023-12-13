import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { UtilServices } from 'src/app/services/util.services';
import { NgxslidervaluesSharedService } from 'src/app/services/ngxslidervalues-shared.service';
import { AdminService } from 'src/app/services/admin.service';
import { ProviderPreferences, provWeights } from 'src/app/util/pojo.models';
import { SharedService } from 'src/app/services/shared.service';
import { AppLoaderComponent } from 'src/app/services/apploader/apploader.component';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-provider-payer-groups-modal',
  templateUrl: './provider-payer-groups-modal.component.html',
  styleUrls: ['./provider-payer-groups-modal.component.scss']
})
export class ProviderPayerGroupsModalComponent {
  payerWeight: number;
  reImbTmWeight: number;
  filteredData: any;
  singleObject: any;


  constructor(private toastrService: ToastrService,private loader: AppLoaderService, private adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.providerPreferences = this.data;
    this.getProviderPayerPref(this.providerPreferences);
    this.getProvidersWeights();
  }
  isValueNaN(value: any) {
    return isNaN(value);
  }

  getProvidersWeights() {
    this.adminService.getProvidersWeights().subscribe({
      next: (getProvidersWeightsResult) => {
        this.loader.close();
        this.provWeightsForm = (JSON.parse(JSON.stringify(getProvidersWeightsResult))).response.providersWeights;
        this.filteredData = this.provWeightsForm.filter(obj => this.providerPreferences.id === obj.provider_id);
        this.singleObject = this.filteredData.reduce((acc, obj) => { return { ...acc, ...obj }; }, {});
      }
      , error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    })
  }

  providerPreferences: ProviderPreferences;
  provWeightsForm: any;

  providerPayerPref: any
  editProviderPrefsErrorMsg: string = ''
  valueWeightOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };

  payerGroupOptSett: Options = {
    floor: -50,
    ceil: 50,
    step: 1
  };




  // --------------------------------- calling api's ------------------------------------------------------------


  updateProviderPayerPref(payerPref) {
    this.adminService.updateProviderActivityPref(payerPref.provider_id, payerPref.payer_id, payerPref.desirability)
      .subscribe({
        next: (successCallback: any) => {
        console.log("updateProviderPayerPref successfully")
        }, error: (err) => {
        
          this.editProviderPrefsErrorMsg = err.error.message;
          this.toastrService.error(err.error.message);
        }
      });
  }



  getProviderPayerPref(providerPreferences: any): any {
    this.loader.open('Loading...');
    this.adminService.getProviderPayerPref(providerPreferences.id).subscribe({
      next: (getProviderPayerPrefResult) => {
        this.providerPayerPref = getProviderPayerPrefResult.response.providerPayerSettings;
        console.log(this.providerPayerPref);
        this.loader.close();
      }, error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    });
  }


// -------------------------------------------- closing dailog box ------------------------------------------------------------------------------


  updateProviderWeights() {
    this.adminService.updateProviderWeights(this.provWeightsForm)
      .subscribe({
        next: () => {
        /* Do Nothing */
        console.log("provider weight form is successfully updated")
        },error: (err) => {
          this.loader.close();
          this.editProviderPrefsErrorMsg = err.error.message;
          this.toastrService.error(err.error.message);
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


