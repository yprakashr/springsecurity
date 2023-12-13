import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { AdminService } from 'src/app/services/admin.service';
import { error } from 'console';
import { ProviderInvAllocationPrefs, ProviderPreferences, ProviderSegWinPrefs, provOptLocation, provWeights } from 'src/app/util/pojo.models';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-provider-inv-allocation-modal',
  templateUrl: './provider-inv-allocation-modal.component.html',
  styleUrls: ['./provider-inv-allocation-modal.component.scss']
})
export class ProviderInvAllocationModalComponent implements OnInit {
  providerInvTotals: { window_1: number; window_2: number; window_3: number; };


  constructor(private toastrService: ToastrService,private loader: AppLoaderService, private adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  practProviderInvAllocationPrefs: Array<ProviderInvAllocationPrefs>;
  payerPref!: any;
  editProviderPrefsErrorMsg: string = '';
  sel_location: any;
  providerOptLocation: Array<provOptLocation>;
  practProviderSegWinPrefs: ProviderSegWinPrefs;
  percentageError: boolean = false;
  providerPreferences: ProviderPreferences;
  provWeightsForm: provWeights;
  isValueNaN(value: any) {
    return isNaN(value);
  }

  ngOnInit(): void {
    this.providerPreferences = this.data;
    this.getProviderOptLocations(this.providerPreferences);
  }

  // --------------------------------------- calling api's --------------------------------------------------------------------------

  getProviderOptLocations(providerPreferences) {
    this.loader.open('Loading...');
    this.adminService.getProviderOptLocations(providerPreferences.id).subscribe({
      next: (getProviderOptLocationsResult: any) => {
        this.loader.close();
        this.providerOptLocation = getProviderOptLocationsResult.response.providerOptLocations;
        console.log(this.providerOptLocation);
      },  error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    });
  }


  getProviderSegmentWindowPref(providerId, locationId) {
    this.loader.open('Loading...');
    this.adminService.getProviderSegmentWindowPref(providerId, locationId).subscribe({
      next: (getProviderSegmentWindowPrefResult: any) => {
        this.practProviderSegWinPrefs = getProviderSegmentWindowPrefResult.response.providersSegmentWindowSettings;
        console.log("this is getProviderSegmentWindowPref data")
        console.log(this.practProviderSegWinPrefs.window_1)
        console.log(getProviderSegmentWindowPrefResult)
        this.loader.close();
      },  error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    })
  };


  updateProviderSegmentWindowPrefs() {
    if (this.practProviderSegWinPrefs.window_1 < this.practProviderSegWinPrefs.window_2) {
      this.adminService.updateProviderSegmentRangePrefs(this.practProviderSegWinPrefs).subscribe({
        next: (res: any) => {
          this.adminService.updateProviderSegmentPercPrefs(this.provWeightsForm.provider_id, this.practProviderSegWinPrefs.location_id, this.practProviderInvAllocationPrefs).subscribe({
            next: (res: any) => {
              console.log(res);
            },error: (err) => {
              this.editProviderPrefsErrorMsg = err.error.message;
              this.toastrService.error(err.error.message);
            }
          })
        },error: (err) => {
          this.editProviderPrefsErrorMsg = err.error.message;
          this.toastrService.error(err.error.message);   
        }
      })
    } else { this.editProviderPrefsErrorMsg = "Error: the value of Range 1 must be less than the value of Range 2"; }
  }


  getProviderInvAllocationPref(providerId, locationId) {
    this.loader.open('Loading...');
    this.adminService.getProviderInventoryAllocationPref(providerId, locationId).subscribe({
      next: (getProviderInvAllocationPrefResult: any) => {
        this.loader.close();
        this.practProviderInvAllocationPrefs = getProviderInvAllocationPrefResult.response.providerInventorySettings;
        console.log("this is getProviderInvAllocationPref data")
        console.log(this.practProviderInvAllocationPrefs)
      },error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    });
  }



  changeProvPrefLocInvAllocation(locPrefObj: any) {
    this.getProviderSegmentWindowPref(locPrefObj.provider_id, locPrefObj.location_id)
    this.getProviderInvAllocationPref(locPrefObj.provider_id, locPrefObj.location_id)
  }


  calcInventoryTotals(): void {
    this.providerInvTotals = { window_1: 0, window_2: 0, window_3: 0 };
    for (const setting of this.practProviderInvAllocationPrefs) {
      this.providerInvTotals.window_1 += (!isNaN(setting.window_1) ? setting.window_1 : 0);
      this.providerInvTotals.window_2 += (!isNaN(setting.window_2) ? setting.window_2 : 0);
      this.providerInvTotals.window_3 += (!isNaN(setting.window_3) ? setting.window_3 : 0);
      if (this.providerInvTotals.window_1 > 100 || this.providerInvTotals.window_1 < 100 ||
          this.providerInvTotals.window_2 > 100 || this.providerInvTotals.window_2 < 100 ||
          this.providerInvTotals.window_3 > 100 || this.providerInvTotals.window_3 < 100) {
        this.percentageError = true;
      } else {
        this.percentageError = false;
      }}}



// ------------------------------------- closingAndPassing Data from  dailog box ---------------------------------------------



  closeDialog() { this.dialogRef.close(this.provWeightsForm);}}
