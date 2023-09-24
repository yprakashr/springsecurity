import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NonOpargoBookings } from '../../MOCK_DATA';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { AdminService } from 'src/app/services/admin.service';
import { ProviderPreferences, practProviderSpoilInvPrefs } from 'src/app/util/pojo.models';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-provider-spoil-inv-modal',
  templateUrl: './provider-spoil-inv-modal.component.html',
  styleUrls: ['./provider-spoil-inv-modal.component.scss']
})
export class ProviderSpoilInvModalComponent implements OnInit {

  editProviderPrefsErrorMsg: any;
  NonOpargoBooking!: any;
  percentageError: boolean;
  constructor(private toastrService: ToastrService,private loader: AppLoaderService, private adminService: AdminService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) { }
  providerPreferences: ProviderPreferences;
  practProviderSpoilInvPrefs: Array<practProviderSpoilInvPrefs>;
  providerSpoilTotals: { nonopargo_total: number, opargo_total: number };


  ngOnInit(): void {
    this.providerPreferences = this.data;
    this.getProviderSpoilInvPref(this.providerPreferences);
  }

  ngAfterContentInit() {
    this.calcSpoilTotals();
  }

  // ------------------------- calling api's -----------------------------------------------------


  getProviderSpoilInvPref(providerPreferences) {
    this.loader.open('Loading...');
    this.adminService.getProviderSpoiledInventoryPref(providerPreferences.id).subscribe({
      next: (getProviderSpoilInvPrefResult: any) => {
        this.loader.close()
        this.practProviderSpoilInvPrefs = getProviderSpoilInvPrefResult.response.providerSpoiledInvSettings;
      }, error: (getProviderSpoilInvPrefError) => {
        this.loader.close();
      console.log(getProviderSpoilInvPrefError)
      }
    });
  }


  calcSpoilTotals() {
    this.providerSpoilTotals = { nonopargo_total: 0, opargo_total: 0 };
    this.practProviderSpoilInvPrefs.forEach((setting)=> {
      this.providerSpoilTotals.nonopargo_total += (!isNaN(setting.nonopargo_bkng_per) ? setting.nonopargo_bkng_per : 0);
      this.providerSpoilTotals.opargo_total += (!isNaN(setting.opargo_bkng_per) ? setting.opargo_bkng_per : 0);
      });
      if (this.providerSpoilTotals.nonopargo_total > 100 || this.providerSpoilTotals.nonopargo_total < 100 ||
        this.providerSpoilTotals.opargo_total > 100 || this.providerSpoilTotals.opargo_total < 100) {
        this.percentageError = true;
      } else {
        this.percentageError = false;
      }
  }



  updateProviderSpoiledInvPrefs() {
    console.error(this.practProviderSpoilInvPrefs)
    this.adminService.updateProviderSpoiledPercPrefs(this.providerPreferences.id, this.practProviderSpoilInvPrefs).subscribe({
      next: (successCallback) => {
        this.closeDialog();
        console.log("updated succefully")
      }, error: (updateProviderSegmentRangePrefsResult) => {
      this.editProviderPrefsErrorMsg = updateProviderSegmentRangePrefsResult;
      }
    })
  }


// ------------------------------------- closing dailog box -----------------------------------------------

  closeDialog() { this.dialogRef.close(); }
}
