import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgramerModalComponent } from '../programer-modal/programer-modal.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormSubmitService } from '../form-submit.service';
import { AppLoaderService } from '../apploader/apploader.service';
import { DummyCompComponent } from '../Dictionary-FormDetail/dictionary-FormDetail.component';


export interface PeriodicElement {
  name: string;
  description: string;
  cdate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'ICICI', description: 'ICICI Bank Program', cdate: '10/21/2021 ' },
  { name: 'HDFC', description: 'HDFC Bank Program', cdate: '10/21/2021 ' },
  { name: 'LIC', description: 'LIC  Program', cdate: '10/21/2021 ' },
  { name: 'Kotak', description: 'Kotak Bank Program', cdate: '10/21/2021 ' },
  { name: 'EPF', description: 'EPF Bank Program', cdate: '10/21/2021 ' },
  { name: 'CYK', description: 'CYK Bank Program', cdate: '10/21/2021 ' },
  { name: 'New Program', description: 'New Program', cdate: '10/21/2021 ' },
  { name: 'Test', description: 'Test Program', cdate: '10/21/2021 ' },
  { name: 'Fluorine', description: 'Fluorine Program', cdate: '10/21/2021 ' },
  { name: 'Neon', description: 'Neon Program', cdate: '10/21/2021 ' },
];

@Component({
  selector: 'app-qualitycheck',
  templateUrl: './qualitycheck.component.html',
  styleUrls: ['./qualitycheck.component.css']
})
export class QualitycheckComponent implements OnInit {


  constructor(public modalDialog: MatDialog, public formsubmit: FormSubmitService, private loader: AppLoaderService) { }

  public isCollapsed = false;
  
  ngOnInit() {
    this.getProgramsData();
  }
  OpenModal(): void {
    const dialogRef = this.modalDialog.open(ProgramerModalComponent, {
      width: '30%',
      height: '60%',
    });
  }

  getProgramsData() {
    this.loader.open("Please Wait......");
    this.formsubmit.getProgramsList().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.loader.close();
      },
      error: (err: any) => {
        console.log(err);
        this.loader.close();
      }
    })
  }
  // openDialog(){

  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayedColumns = [
    'name',
    'description',
    'cdate'
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource(ELEMENT_DATA);

  
}






