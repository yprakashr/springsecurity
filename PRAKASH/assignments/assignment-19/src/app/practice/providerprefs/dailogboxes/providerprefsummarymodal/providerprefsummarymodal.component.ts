import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProviderprefsComponent } from '../../providerprefs.component';
import { NgxslidervaluesSharedService } from 'src/app/services/ngxslidervalues-shared.service';
import { AppLoaderService } from 'src/app/services/apploader/apploader.service';


@Component({
  selector: 'app-providerprefsummarymodal',
  templateUrl: './providerprefsummarymodal.component.html',
  styleUrls: ['./providerprefsummarymodal.component.scss']
})
export class ProviderprefsummarymodalComponent implements AfterViewInit, OnInit {
  providerPreferenceSummary: any[] = this.data;
  displayedColumns = ['provider_name', 'payer_weight', 'reImbTm_weight', 'activity_weight', 'prefProv_weight', 'refProv_weight', 'loc_weight', 'tofday_weight', 'newPt_weight'];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) matsort: any;
  dataSource: MatTableDataSource<any>;
  constructor(private loader: AppLoaderService, public dialogRef: MatDialogRef<ProviderprefsComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data)

  }
  ngOnInit(): void { this.dataSource = new MatTableDataSource(this.data); }

  filter(e: any) { this.dataSource.filter = e.target.value; }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
  }


  closeDialog(){
    this.dialogRef.close();
  }

}
