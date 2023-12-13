import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProviderPayerGroupsModalComponent } from './dailogboxes/provider-payer-groups-modal/provider-payer-groups-modal.component';
import { ProviderLocationTimesModalComponent } from './dailogboxes/provider-location-times-modal/provider-location-times-modal.component';
import { ProviderRefProvidersModalComponent } from './dailogboxes/provider-ref-providers-modal/provider-ref-providers-modal.component';
import { ProviderPrefProviderModalComponent } from './dailogboxes/provider-pref-provider-modal/provider-pref-provider-modal.component';
import { ProviderApptsModalComponent } from './dailogboxes/provider-appts-modal/provider-appts-modal.component';
import { ProviderNewPatientModalComponent } from './dailogboxes/provider-new-patient-modal/provider-new-patient-modal.component';
import { ProviderSpoilInvModalComponent } from './dailogboxes/provider-spoil-inv-modal/provider-spoil-inv-modal.component';
import { ProviderInvAllocationModalComponent } from './dailogboxes/provider-inv-allocation-modal/provider-inv-allocation-modal.component';
import { ProviderprefsummarymodalComponent } from './dailogboxes/providerprefsummarymodal/providerprefsummarymodal.component';
import { AdminService } from 'src/app/services/admin.service';
import { error } from 'console';
import { Observable } from 'rxjs';
import { ProactiveConstants } from 'src/app/util/proactivecare.constants';
import { UserServices } from 'src/app/services/opargouser.service';
import { ProviderPreferences, provWeights } from 'src/app/util/pojo.models';
import { AppLoaderComponent } from 'src/app/services/apploader/apploader.component';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-providerprefs',
  templateUrl: './providerprefs.component.html',
  styleUrls: ['./providerprefs.component.css'],
})
export class ProviderprefsComponent implements OnInit, AfterViewInit {


  //****************** variables ************************* */

  editProviderPrefsErrorMsg: string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matsort: MatSort;
  displayedColumns: string[] = ['name', 'Action'];
  dataSource: MatTableDataSource<any>;
  providerPreferences: Array<ProviderPreferences>;
  provWeightsForm: Array<provWeights>;
  filteredData: provWeights[];
  singleObject: {};


//****************** Constructors ************************* */

  constructor(private toastrService: ToastrService,private loader: AppLoaderService, private dailog: MatDialog, private adminService: AdminService, private userService: UserServices) {
    this.getPracticeProviders()
    this.getProvidersWeights()
  }


  getPracticeProviders() {
    this.loader.open('Loading...');
    return this.userService.getPracticeProvider().subscribe({
      next: (getPracticeProvidersResult) => {
      this.providerPreferences = (JSON.parse(JSON.stringify(getPracticeProvidersResult))).response.providers;
      this.dataSource = new MatTableDataSource(this.providerPreferences);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matsort;
        this.loader.close();
      }, error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    });
  };

  //****************** ng-hooks ************************* */

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
  }
  ngOnInit(): void { }
  ngOnDestroy() { }


//****************** methods ************************* */


  filter(e: any) { this.dataSource.filter = e.target.value; }


// *********************************** provider payer groups modal *****************************************************


  openProviderPayerGroupsModal(provider: any) {
    const ref = this.dailog.open(ProviderPayerGroupsModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    });
    ref.afterClosed().subscribe((data: any) => {
      const index = this.provWeightsForm.findIndex(obj => data.provider_id === obj.provider_id);
      this.provWeightsForm.splice(index, 1, data);
    })
  }


// *********************************** Activity types(ProviderApptsModal component) ****************************************************************


  openProviderApptsModal(provider) {
    const ref = this.dailog.open(ProviderApptsModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    })
    ref.afterClosed().subscribe((data: any) => {
      const index = this.provWeightsForm.findIndex(obj => data.provider_id === obj.provider_id);
      this.provWeightsForm.splice(index, 1, data);
    })
  }



// ************************************************* prefered provider Modal *************************************************

  openProviderPrefProviderModal(provider) {
    const ref = this.dailog.open(ProviderPrefProviderModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    });
    ref.afterClosed().subscribe((data: any) => {
      const index = this.provWeightsForm.findIndex(obj => data.provider_id === obj.provider_id);
      this.provWeightsForm.splice(index, 1, data);
    })
  }


// ************************************* Reffering providers modal *****************************************************




  openProviderRefProvidersModal(provider) {
    const ref = this.dailog.open(ProviderRefProvidersModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    });
    ref.afterClosed().subscribe((data: any) => {
      const index = this.provWeightsForm.findIndex(obj => data.provider_id === obj.provider_id);
      this.provWeightsForm.splice(index, 1, data);
    })
  }



// **************************************** Time&Amps Location modal ***********************************************************


  openProviderLocationTimesModal(provider) {
    const ref = this.dailog.open(ProviderLocationTimesModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    })
    ref.afterClosed().subscribe((data: any) => {
      const index = this.provWeightsForm.findIndex(obj => data.provider_id === obj.provider_id);
      this.provWeightsForm.splice(index, 1, data);
    })
  }




// *****************************************  Inventory Allocation modal *********************************************



  openProviderInvAllocationModal(provider) {
    this.dailog.open(ProviderInvAllocationModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    });
  }


// ************************************************* Non Opargo Bookings(ProviderSpoilInvModal) *****************************************

  openProviderSpoilInvModal(provider) {
    this.dailog.open(ProviderSpoilInvModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
          data: provider
        })
  }


// *********************************** New Patient (ProviderNewPatientModal) ********************************************************


  openProviderNewPatientModal(provider) {
    const ref = this.dailog.open(ProviderNewPatientModalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: provider
    })
    ref.afterClosed().subscribe((data: any) => {
      const index = this.provWeightsForm.findIndex(obj => data.provider_id === obj.provider_id);
      this.provWeightsForm.splice(index, 1, data);
    })

  }



// ************************************************************ summary modal *****************************************************

  openProviderPrefSummaryModal() {
    const ref =this.dailog.open(ProviderprefsummarymodalComponent, {
      width: '700px',
      height: 'auto',
      disableClose: true,
      data: this.provWeightsForm
    })
  }


// -------------------------------------------- Api services ------------------------------------------------


  getProvidersWeights() {
    this.adminService.getProvidersWeights().subscribe({
      next: (getProvidersWeightsResult) => {
      this.provWeightsForm = (JSON.parse(JSON.stringify(getProvidersWeightsResult))).response.providersWeights;
      },  error: (err) => {
        this.loader.close();
        this.editProviderPrefsErrorMsg = err.error.message;
        this.toastrService.error(err.error.message);
      }
    })
  }


}
